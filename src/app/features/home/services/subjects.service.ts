import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Base_Url } from 'auth';
import { EMPTY, Observable } from 'rxjs';
import { ISubject } from '../../interfaces/cards-subjects';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  _httpClient = inject(HttpClient)
  _baseUrl = inject(Base_Url)

  getAllSubjects(): Observable<{ message: string; metadata: any; subjects: ISubject[] }> {
    return this._httpClient.get<{ message: string; metadata: any; subjects: ISubject[] }>(`${this._baseUrl}subjects`);
  }
  GetSubjectList(id: string ): Observable<any> {
  return this._httpClient.get(`${this._baseUrl}exams?subject=${id}`);
  }
}

//https://exam.elevateegy.com/api/v1/exams?subject=670037f6728c92b7fdf434fc




