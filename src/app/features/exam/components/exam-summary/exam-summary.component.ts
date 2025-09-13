import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { QuestionAdapt } from '../../../../core/exam/interfaces/questions';
import { Store } from '@ngrx/store';
import * as QuestionSelectors from '../../../../core/store/questions/question.selectors';
import * as QuestionActions from '../../../../core/store/questions/question.action';
import { CommonModule , NgIf } from '@angular/common';


@Component({
  selector: 'app-exam-summary',
  templateUrl: './exam-summary.component.html',
  styleUrls: ['./exam-summary.component.scss']
  ,imports: [CommonModule , NgIf]
})
export class ExamSummaryComponent implements OnInit {
  wrongQuestions: QuestionAdapt[] = [];
  private _store = inject(Store);

ngOnInit(): void {
  this._store.dispatch(QuestionActions.FilterWA());

  this._store.select(QuestionSelectors.selectWrongQuestions)
    .subscribe((questions: QuestionAdapt[]) => {
      this.wrongQuestions = questions;
    });
}
  

  CloseModal() {
    this._store.dispatch({ type: '[Exam Modal] Reset Modal State' });
    this._store.dispatch({ type: '[Question] Reset Q State' });
  }

}
