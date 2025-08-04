import { Component, inject, Input, OnChanges, OnDestroy } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Subscription } from 'rxjs';
import { CardsComponent } from "../cards/cards.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  imports: [CardsComponent , RouterLink],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent{



}
