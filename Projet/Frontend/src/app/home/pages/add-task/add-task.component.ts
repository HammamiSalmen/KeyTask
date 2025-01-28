import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports:[RouterModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = {
    username: 'Guest',
    gender: 'Male',
  };
  userGroups: any[] = [];
  activePageUrl: SafeResourceUrl | null = null;
  searchQuery: string = '';
  nightMode: boolean = false;

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Load user from navigation state or fallback to defaults
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras.state?.['user'] || this.user;

    // Example: Load user groups dynamically
    this.userGroups = [
      { id: 1, name: 'Team Alpha' },
      { id: 2, name: 'Project Beta' },
    ];

    // Default iframe content
    this.loadPage('work-today');
  }

  loadPage(route: string, id?: number) {
    const baseUrl = '/pages/';
    const pageUrl = id ? `${baseUrl}${route}/${id}` : `${baseUrl}${route}`;
    this.activePageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pageUrl);
  }

  search() {
    if (this.searchQuery.trim()) {
      alert(`Searching for: ${this.searchQuery}`);
      // Add logic to filter data or search specific content
    } else {
      alert('Please enter a search query.');
    }
  }

  toggleNightMode() {
    this.nightMode = !this.nightMode;
    document.body.classList.toggle('night-mode', this.nightMode); // Add CSS for night mode
  }

  logout() {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}
