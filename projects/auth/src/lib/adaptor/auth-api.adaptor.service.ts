import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdaptorService implements Adaptor {

  constructor() { }

  adapt(data:any){
    return {
      message : data.message,
      token : data.token, 
      username : data.user.username,
      firstName : data.user.firstName,
      lastName : data.user.lastName,
      email : data.user.email,
      phone : data.user.phone,
      role : data.user.role,
      isVerified : data.user.isVerified,
      _id : data.user._id,
      createdAt : data.user.createdAt
      }
    }
  }



