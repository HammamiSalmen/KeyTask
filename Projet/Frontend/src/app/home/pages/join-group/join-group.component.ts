import { Component } from '@angular/core';
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
