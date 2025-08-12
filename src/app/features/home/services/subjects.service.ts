import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Base_Url } from 'auth';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  _httpClient = inject(HttpClient)
  _baseUrl = inject(Base_Url)

getAllSubjects() {
  return this._httpClient.get(`${this._baseUrl}subjects`);
}
}





