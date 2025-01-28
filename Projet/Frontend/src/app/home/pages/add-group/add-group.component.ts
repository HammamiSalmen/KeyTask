import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======


>>>>>>> f09b42ac5aa7332baaedd0f1443aaca8f8651fc1
@Component({
  selector: 'app-add-group',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css'
})
export class AddGroupComponent {
  admin = {
      groupe_name: '7amma',
      password: '',
    };
<<<<<<< HEAD
password: any;
Groupe_name: any;
=======
Groupe_name: any;
password: any;
>>>>>>> f09b42ac5aa7332baaedd0f1443aaca8f8651fc1
  
    constructor(private router: Router) {}
  
    onSubmit() {
    
      // Navigate to the home component after sign-up
      this.router.navigate(['/add-task'], { state: { admin: this.admin } });
    }
}