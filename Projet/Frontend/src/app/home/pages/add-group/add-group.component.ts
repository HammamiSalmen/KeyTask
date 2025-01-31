import { Component } from '@angular/core';
<<<<<<< HEAD
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-group',
  imports: [CommonModule, RouterModule,FormsModule],
=======
import { CommonModule } from '@angular/common';
import {Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-group',
  imports: [CommonModule,RouterModule],
>>>>>>> 58e98d2586a5c511714e8deb9ad159a4f34dd587
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
  
})
export class AddGroupComponent {
<<<<<<< HEAD
  admin = {
      groupe_name: '7amma',
      password: '',
    };
Groupe_name: any;
password: any;
  
    constructor(private router: Router) {}
  
    onSubmit() {
    
      // Navigate to the home component after sign-up
      this.router.navigate(['/add-task'], { state: { admin: this.admin } });
    }
}
=======
  Groupe_name: string = '';
  password: string = '';
  constructoronstructor(private router: Router, private sanitizer: DomSanitizer) {}
}
>>>>>>> 58e98d2586a5c511714e8deb9ad159a4f34dd587
