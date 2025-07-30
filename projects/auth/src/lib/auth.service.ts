// import { inject, Injectable } from '@angular/core';
// import { AuthApi } from './base/AuthApi';
// import { catchError, map, Observable, throwError } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { AuthEndPoint } from './enums/AuthEndPoint';
// import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService implements AuthApi {

//   _httpClient = inject(HttpClient);
//   _authApiAdaptorService = inject(AuthApiAdaptorService);

//   login ( data:any ) : Observable<any>{
//     return this._httpClient.post(AuthEndPoint.AUTH_LOGIN, data).pipe(
//       map(res => this._authApiAdaptorService.adapt(res)),
//       catchError(error => {
//         console.error('Login error:', error);
//         return throwError(() => error);
//       })
//     );
//   }
  
//   register ( data:any ) : Observable<any>{
//     return
//   }
//   forgotpassword ( data:any ) : Observable<any>{
//     return
//   }

// }
