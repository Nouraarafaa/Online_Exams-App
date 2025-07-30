import { Observable } from "rxjs";

export abstract class AuthApi {
  abstract login(data : any): Observable<any>;
  abstract register(data : any): Observable<any>;
  abstract forgotpassword(data : any): Observable<any>;
}