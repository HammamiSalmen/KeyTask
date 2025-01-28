import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
password: any;
Groupe_name: any;
  
    constructor(private router: Router) {}
  
    onSubmit() {
    
      // Navigate to the home component after sign-up
      this.router.navigate(['/add-task'], { state: { admin: this.admin } });
    }
}