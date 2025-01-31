import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { KeycloakService } from '../Services/keycloak.service';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  router: any;
  constructor(private keycloakService: KeycloakService) {}

  login() {
    this.keycloakService
      .init()
      .then(() => {
        console.log('Keycloak initialized successfully');
        return this.keycloakService.login();
      }) .then(() => {
        this.router.navigate(['/home']); // Redirect to the home page after login
      })
      .catch((error) => {
        console.error('Keycloak initialization/login failed:', error);
      });
  }
}
