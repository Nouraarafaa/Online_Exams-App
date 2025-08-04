import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Base_Url } from 'auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _httpClient = inject(HttpClient);
  _baseUrl = inject(Base_Url); 

  ForgotPassword(data: object): Observable<any> {
    return this._httpClient.post(`${this._baseUrl}auth/forgotPassword`, data);
  }
  VerifyCode ( data:object ):Observable<any>{
    return this._httpClient.post(`${this._baseUrl}auth/verifyResetCode`, data);
  }
  ResetPassword ( data:object ):Observable<any>{
    return this._httpClient.put(`${this._baseUrl}auth/resetPassword`, data);
  }




}
