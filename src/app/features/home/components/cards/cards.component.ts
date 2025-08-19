import { Component, OnInit, inject } from '@angular/core';
import { ISubject } from '../../../interfaces/cards-subjects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SubjectsActions from '../../store/subjects.actions';
import * as SubjectsSelectors from '../../store/subjects.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [AsyncPipe , RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  private readonly _store = inject(Store);
  SubjectsList$!: Observable<ISubject[]>;
  showAll: boolean = false; // controls if all cards appear


  ngOnInit(): void {
    this._store.dispatch(SubjectsActions.LoadSubjects());
    this.SubjectsList$ = this._store.select(SubjectsSelectors.SelectAllSubjects);
  }
    toggleView() {
    this.showAll = !this.showAll;
  }

}
