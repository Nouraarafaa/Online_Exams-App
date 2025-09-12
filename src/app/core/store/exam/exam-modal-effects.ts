import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SubjectsService } from '../../../features/home/services/subjects.service';
import * as QuestionActions from '../questions/question.action';
import * as ModalActions from '../exam/exam-modal.action';

@Injectable()
export class ModalEffects {
  private actions$ = inject(Actions);

  StartModalEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ModalActions.OpenModal),
      map(action =>
        QuestionActions.loadQuestions({ examId: action.examId })
      )
    );
  });
}
