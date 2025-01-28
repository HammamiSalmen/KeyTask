import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-group',
  imports: [CommonModule, RouterModule],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css'
})
export class AddGroupComponent {
  admin = {
      grpname: '7amma',
      password: '',
    };
  
    constructor(private router: Router) {}
  
    onSubmit() {
    
      // Navigate to the home component after sign-up
      this.router.navigate(['/add-task'], { state: { admin: this.admin } });
    }
}