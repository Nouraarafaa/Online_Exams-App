import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { SearchSectionComponent } from "../../../shared/components/search-section/search-section.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [SidebarComponent, NavbarComponent, SearchSectionComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
