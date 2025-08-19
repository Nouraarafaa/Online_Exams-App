import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `<p>Logging out...</p>`
})
export class LogoutComponent {
  constructor(private router: Router) {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
