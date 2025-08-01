import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthEndpoint';
import { AuthApiAdapt } from './adaptor/auth-api-adapt';
import { Base_Url } from './BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthApi {

  _httpClient = inject(HttpClient)
  _authApiAdapt = inject(AuthApiAdapt)
  _base_Url = inject(Base_Url);

  login(data: any): Observable<any> {
    return this._httpClient.post(this._base_Url + AuthEndpoint.LOGIN, data)
      .pipe(map(res => this._authApiAdapt.adapt(res)),
        catchError(err => of(err)  //of(err) is used to return an observable of the error.
        ));
  }

  register(data: any): Observable<any> {
    return this._httpClient.post(this._base_Url + AuthEndpoint.REGISTER, data)
      .pipe(map(res => this._authApiAdapt.adapt(res)),
        catchError(err => of(err)  
        ));
  }


  
  //   forgotPassword(data: any): Observable<any> {
  //   return this._httpClient.post(AuthEndpoint.FORGOT_PASSWORD, data);
  // }
  // changePassword(data: any): Observable<any> {
  //   return
  // }
  // editProfile(data: any): Observable<any> {
  //   return
  // }
}


