import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  
  private _keycloak: Keycloak | undefined;

  constructor() { }

  get keycloak() {
    if (this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:8080/',
        realm: 'KeyTask',
        clientId: 'key-admin'
      });   
    }
    return this._keycloak 
  }

  async init() {
    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required'
    })
  }

  async login() {
    await this.keycloak?.login();
  }

  get userId():string{
    return this.keycloak?.tokenParsed?.sub as string;
  }

  get isTokenValid() {
    return !this.keycloak?.isTokenExpired();
  }

  get fullName() {
    return this.keycloak?.tokenParsed?.['name'] as string;
  }

  logout() {
    return this.keycloak?.login({redirectUri: 'http://localhost:4200/'})
  }

  accountManagment() {
    return this.keycloak?.accountManagement();
  }
}
