import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule,RouterModule],
})
export class HomeComponent {
  user: any;

  constructor(private router: Router) {
    // Retrieve user data from navigation state
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'] || {};
  }
}
