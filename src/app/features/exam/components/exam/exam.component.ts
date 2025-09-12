import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionAdapt } from '../../../../core/exam/interfaces/questions';
import * as QuestionSelectors from '../../../../core/store/questions/question.selectors';
import * as QuestionActions from '../../../../core/store/questions/question.action';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam',
  imports: [CommonModule, FormsModule],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  private readonly _store = inject(Store);
  CurrentQuestion: QuestionAdapt | null = null;
  numQ: number = 0;
  SelectedAnswer: string = '';
  isBckBtnDisabled = true;
  isNextBtnDisabled = true;

  ngOnInit(): void {
    this.GetCurrentQuestion();
    this.GetNumOfQuestions();
  }

  GetCurrentQuestion() {
    this._store.select(QuestionSelectors.selectCurrentQuestion).subscribe({
      next: (res) => {
        this.CurrentQuestion = res;
        this.SelectedAnswer = '';
        this.enableDBtns();
      }
    });
  }

  GetNumOfQuestions() {
    this._store.select(QuestionSelectors.selectNumOfQuestions).subscribe({
      next: (res) => this.numQ = res
    });
  }

  GenerateRange() {
    return [...Array(this.numQ).keys()];
  }

  OnSelectAns() {
    this.enableDBtns();
  }

  enableDBtns() {
    const currentIndex = this.CurrentQuestion?.index ?? 0;
    this.isBckBtnDisabled = currentIndex <= 0;
    this.isNextBtnDisabled = !this.SelectedAnswer;
  }

  onNext() {
    if (!this.CurrentQuestion) return;

    // save answer
    this._store.dispatch(QuestionActions.UpdateQuestion({
      QId: this.CurrentQuestion._id,
      selectedAnswer: this.SelectedAnswer
    }));

    // go to next question
    this._store.dispatch(QuestionActions.onNext());

    // check if last question
    if ((this.CurrentQuestion.index ?? 0) === this.numQ - 1) {
      console.log('Exam finished. Submitting...');
      this.ShowReport();
    }
  }

  onBack() {
    this._store.dispatch(QuestionActions.onBack());
  }

  ShowReport() {
    this._store.dispatch(QuestionActions.FilterWA());
    this._store.dispatch({ type: '[Exam Modal] Set Exam Status', ExamStatus: 'Show Report' });
  }

}
