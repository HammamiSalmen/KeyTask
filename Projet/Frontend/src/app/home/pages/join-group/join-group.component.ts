import { Component } from '@angular/core';
<<<<<<< HEAD
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
=======
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
@Component({
  selector: 'app-join-group',
  imports: [CommonModule,RouterModule ],
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {
  password: string = '';
}
>>>>>>> 58e98d2586a5c511714e8deb9ad159a4f34dd587
