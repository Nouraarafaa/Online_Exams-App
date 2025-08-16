import { ISubject } from './../../interfaces/cards-subjects';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { SubjectsService } from "../services/subjects.service";
import { LoadSubjects, SetSubjects } from "./subjects.actions";

@Injectable()
export class SubjectEffects {
  private actions$ = inject(Actions);
  private _subjectsService = inject(SubjectsService);

fetchProductsEffect$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(LoadSubjects),
    switchMap(() => this._subjectsService.getAllSubjects().pipe(
      tap(response => {
        console.log('Fetched subjects from effect:', response);
      }),
      map(response => SetSubjects({ subjects: response.subjects })) 
    ))
  );
});

  }
