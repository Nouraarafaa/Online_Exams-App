import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Base_Url } from 'auth';
import {  map, Observable } from 'rxjs';
import { ISubject } from '../../interfaces/cards-subjects';
import { QuestionAdapt, RootQ } from '../../../core/exam/interfaces/questions';
import { MainApiAdapter } from '../../../core/exam/adapter/main.adapter';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  _httpClient = inject(HttpClient)
  _baseUrl = inject(Base_Url)
  private _mainApiAdapter = inject(MainApiAdapter);

  
  getAllSubjects(): Observable<{ message: string; metadata: any; subjects: ISubject[] }> {
    return this._httpClient.get<{ message: string; metadata: any; subjects: ISubject[] }>(`${this._baseUrl}subjects`);
  }
  GetSubjectList(id: string ): Observable<any> {
  return this._httpClient.get(`${this._baseUrl}exams?subject=${id}`);
  }
GetQuestions(id: string): Observable<QuestionAdapt[]> {
  return this._httpClient
    .get<RootQ>(`${this._baseUrl}questions?exam=${id}`)
    .pipe(
      map((data: RootQ) => this._mainApiAdapter.QuestionAdapter(data))
    );
}

}




