import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddGroupComponent } from './home/pages/add-group/add-group.component';
import { JoinGroupComponent } from './home/pages/join-group/join-group.component';
import { AddTaskComponent } from './home/pages/add-task/add-task.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'add-group' , component:AddGroupComponent},
  { path: 'join-group' , component:JoinGroupComponent},
  { path: 'add-task' , component:AddTaskComponent},
];