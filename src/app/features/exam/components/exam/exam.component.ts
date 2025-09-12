import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionAdapt } from '../../../../core/exam/interfaces/questions';
import * as QuestionSelectors from '../../../../core/store/questions/question.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam',
  imports: [CommonModule, FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent implements OnInit {

  private readonly _store = inject(Store);
  CurrentQuestion: QuestionAdapt | null = null;
  numQ: number = 0;
  SelectedAnswer: string = '';
  isBckBtnDisabled = true;
  isNextBtnDisabled = true;

  GetCurrentQuestion() {
    this._store.select(QuestionSelectors.SelectCurrentQuestion).subscribe({
      next: (res) => {
        this.CurrentQuestion = res;

        // reset selected answer when moving to new question
        this.SelectedAnswer = '';

        // update buttons after question changes
        this.enableDBtns();
      },
      error: (err) => {
        console.error('Error fetching current question:', err);
      }
    });
  }

  GetNumOfQuestions() {
    this._store.select(QuestionSelectors.SelectNumOfQuestions).subscribe({
      next: (res) => {  
        this.numQ = res;
      },
      error: (err) => {
        console.error('Error fetching number of questions:', err);
      }
    });
  }

  GenerateRange() {
    return [...new Array(this.numQ).keys()];
  }

  OnSelectAns() {
    this.enableDBtns(); // enable Next when answer selected
  }

  enableDBtns() {
    this.isBckBtnDisabled = (this.CurrentQuestion?.index ?? 1) === 1;
    this.isNextBtnDisabled = !this.SelectedAnswer || this.SelectedAnswer === '';
  }

  onNext() {
    if (!this.CurrentQuestion) return;

    // save answer
    this._store.dispatch({
      type: '[Question] Update Question',
      QId: this.CurrentQuestion._id,
      SelectedAnswer: this.SelectedAnswer
    });

    // check if last question
    if (this.CurrentQuestion.index === this.numQ - 1) {
      console.log('Exam finished. Submitting...');
      return;
    }

    // go to next question
    this._store.dispatch({ type: '[Question] Next Question' });
  }

  onBack() {
    if (this.CurrentQuestion?.index && this.CurrentQuestion.index > 1) {
      this._store.dispatch({ type: '[Question] Previous Question' });
    }
  }

  ngOnInit(): void {
    this.GetCurrentQuestion();
    this.GetNumOfQuestions();
  }

}
