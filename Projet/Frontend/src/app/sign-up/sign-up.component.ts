import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [FormsModule,RouterModule],
})
export class SignUpComponent {
  user = {
    username: '7amma',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Female',
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Navigate to the home component after sign-up
    this.router.navigate(['/home'], { state: { user: this.user } });
  }
}