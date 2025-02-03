import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  private authenticated: boolean = false;

  constructor() {}
  
  private get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
  
  get keycloak() {
    if (!this._keycloak && this.isBrowser) {
      // Ensure Keycloak instance is created in a browser environment
      this._keycloak = new Keycloak({
        url: 'http://localhost:8080/',  // Ensure this is correct
        realm: 'KeyTask',
        clientId: 'key-admin',  // Ensure clientId matches what is configured in Keycloak
      });
    }
    return this._keycloak!;
  }
  
  async init(): Promise<boolean> {
    if (this.isBrowser) {
      try {
        this.authenticated = await this.keycloak.init({
          onLoad: 'login-required',
        });
        console.log('Keycloak initialized successfully', this.authenticated);
        return this.authenticated;
      } catch (error) {
        console.error('Error initializing Keycloak:', error);
        return false;
      }
    } else {
      console.warn('Keycloak initialization attempted in a non-browser environment.');
      return false;
    }
  }
  
  async login() {
    if (this.isBrowser) {
      await this.keycloak.login({
        redirectUri: 'http://localhost:4200/home',
      });
    } else {
      console.warn('Login attempted in a non-browser environment.');
    }
  }

  get userId(): string | undefined {
    return this.keycloak.tokenParsed?.sub;
  }

  get isTokenValid(): boolean {
    return this.keycloak ? !this.keycloak.isTokenExpired() : false;
  }
  get fullName(): string | undefined {
    return this.keycloak.tokenParsed?.['name'];
  }

  logout() {
    if (this.authenticated) {
      console.log('Logging out...');
      this.keycloak.logout({ redirectUri: 'http://localhost:4200/' });
    } else {
      console.error('Keycloak is not initialized or user is not authenticated.');
    } 
  }
}
