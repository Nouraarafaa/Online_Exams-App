import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdapt implements Adaptor {

  constructor() { }

  adapt(data: any): any { // Adapt the API response to a more usable format
    return{
      message: data.message,
      token: data.token,
      user: {
        email: data.user.email,
      }
    }
  }

}
