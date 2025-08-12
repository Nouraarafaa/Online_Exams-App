import { Component } from '@angular/core';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { SearchSectionComponent } from "../../../shared/components/search-section/search-section.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [SidebarComponent, SearchSectionComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
