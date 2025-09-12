import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SubjectsService } from '../../../features/home/services/subjects.service';
import * as QuestionActions from './question.action';

@Injectable()
export class QuestionsEffects {
  private actions$ = inject(Actions);
  private _subjectsService = inject(SubjectsService);

  loadQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuestionActions.loadQuestions),
      switchMap(action =>
        this._subjectsService.GetQuestions(action.examId).pipe(
          tap((data) => console.log('Questions Data:', data)),
          map((data) =>
            QuestionActions.setQuestions({ questions : data })
          )
        )
      )
    );
  });

setQuestions$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(QuestionActions.setQuestions),
    tap(action => console.log('Set Questions Action:', action)),
    map((action) =>
      QuestionActions.setCurrentQuestion({ currentQuestion: action.questions[0] })
    )
  );
});

}
