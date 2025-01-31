import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeycloakService } from '../Services/keycloak.service';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private keycloakService: KeycloakService) {}

  login() {
    this.keycloakService.login();
  }
}
