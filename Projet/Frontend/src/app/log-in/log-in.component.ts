import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntegrationService } from '../Services/integration.service';
import { LoginRequest } from '../Services/login-request';

@Component({
  selector: 'app-log-in',
  imports: [RouterModule, FormsModule, ReactiveFormsModule], // ✅ Only import what's needed
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  userForm: FormGroup;
  request: LoginRequest = new LoginRequest(); // ✅ Correct instantiation

  constructor(private router: Router, private integration: IntegrationService) {
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  Login() {
    const formValue = this.userForm.value;

    if (!formValue.username || !formValue.password) {
      alert('Wrong Credentials');
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.integration.doLogin(this.request).subscribe({
      next: (res) => {
        console.log('Response received:', res.token);

        // ✅ Navigate to dashboard on success
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        console.log('Error received:', err);
        alert('Login failed. Please try again.');
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.Login();
    } else {
      alert('Please enter a valid username and password!');
    }
  }
}
