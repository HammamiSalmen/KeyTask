import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-group',
  imports: [CommonModule,RouterModule],
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
  
})
export class AddGroupComponent {
  Groupe_name: string = '';
  password: string = '';
  constructoronstructor(private router: Router, private sanitizer: DomSanitizer) {}
}
