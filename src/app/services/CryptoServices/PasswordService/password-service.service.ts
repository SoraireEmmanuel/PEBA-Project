import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../environments/environment'

const SECRET_KEY = environment.cryptoCode;

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

  constructor() { }

  encodePassword(password:string){
    return CryptoJS.AES.encrypt(password,SECRET_KEY).toString()
  }
}
