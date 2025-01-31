import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;

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
    return this._keycloak;
  }
  
  async init() {
    if (this.isBrowser) {
      try {
        const authenticated = await this.keycloak?.init({
          onLoad: 'check-sso',  // Check for SSO session instead of forcing login
        });
        console.log('Keycloak initialized successfully', authenticated);
      } catch (error) {
        console.error('Error initializing Keycloak:', error);
        if (error && (error as { response?: any }).response) {
          console.error('Error details:', (error as { response: any }).response);
        }
      }
    } else {
      console.warn('Keycloak initialization attempted in a non-browser environment.');
    }
  }
  
  async login() {
    if (this.isBrowser) {
      await this.keycloak?.login({
        redirectUri: 'http://localhost:4200/home',
      });
    } else {
      console.warn('Login attempted in a non-browser environment.');
    }
  }

  get userId(): string | undefined {
    return this.keycloak?.tokenParsed?.sub;
  }

  get isTokenValid(): boolean {
    return this.keycloak ? !this.keycloak.isTokenExpired() : false;
  }

  get fullName(): string | undefined {
    return this.keycloak?.tokenParsed?.['name'];
  }

  logout() {
    if (this.keycloak) {
      this.keycloak.logout({
        redirectUri: window.location.origin + '/login', // Redirect after logout
      });
    } else {
      console.error('Keycloak is not initialized.');
    }
  }
}
