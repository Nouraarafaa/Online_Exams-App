import { Component } from '@angular/core';
import { SubjectListComponent } from "../subject-list/subject-list.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [SubjectListComponent , RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
