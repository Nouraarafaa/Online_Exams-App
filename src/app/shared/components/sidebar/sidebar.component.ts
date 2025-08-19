import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'] 
})
export class SidebarComponent {
  
  constructor(private router: Router) {} 

  logout():void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']); 
}


}