import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CardsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
