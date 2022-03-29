import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/clases/user';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from 'src/app/clases/login';

const URI = environment.PEBA_Api_URL_Base;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() updateLoginState: EventEmitter<any> = new EventEmitter();
  currentUser:User= new User();
  constructor(private _localService:LocalServiceService,
              private _http:HttpClient) {
      this.updateLoginState.emit(false)
}

validationLogin():boolean{
  let user:User= new User();
  user = this._localService.getJsonValue('User')
  if(user == null){
    return false //if a user is not logged in return false
  } else{
    return user.signIn //if a user is logged in return true
  }
}
loginState(){
  this.updateLoginState.emit(true);
}
login(user:Login): Observable<any>{
  var resp: any = this._http.post(`${URI}login`, user);
  return resp;
}

logout(){
  this._localService.clearToken();
  this.updateLoginState.emit(false)
}
tokenTimeValidation(){

}
}
