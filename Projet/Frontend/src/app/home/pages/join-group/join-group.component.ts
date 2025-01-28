import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-group',
  imports: [FormsModule,RouterModule],
  templateUrl: './join-group.component.html',
  styleUrl: './join-group.component.css',
  standalone:true,
})
export class JoinGroupComponent {
  client = {
    password:'',
  };
password: any;


  constructor(private router: Router) {}
  
    onSubmit() {
      if (this.client.password === null) {
        alert('Passwords do not match!');
        return;
      }
  
      // Navigate to the home component after sign-up
      this.router.navigate(['/group-detail'], { state: { client: this.client } });
    }
  }