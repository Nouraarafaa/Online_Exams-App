import { Component } from '@angular/core';
import { WelcomePageComponent } from "../../auth/welcome-page/welcome-page.component";
import { AuthNavbarComponent } from "../../auth/auth-navbar/auth-navbar.component";
import { RouterOutlet } from '@angular/router';
import { ContinueBtnsComponent } from "../../auth/continue-btns/continue-btns.component";

@Component({
  selector: 'app-auth-layout',
  imports: [WelcomePageComponent, AuthNavbarComponent, RouterOutlet, ContinueBtnsComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
