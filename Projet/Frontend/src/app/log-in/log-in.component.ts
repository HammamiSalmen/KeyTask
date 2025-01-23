import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [RouterModule, FormsModule],
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Validate login credentials (mock example)
    if (this.username && this.password) {
      // Navigate to home on successful login
      this.router.navigate(['/home']);
    } else {
      alert('Please enter valid username and password!');
    }
  }
}

/* import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-log-in',
  imports: [RouterModule, FormsModule],
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})

}
 */