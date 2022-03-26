import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/clases/user';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() updateLoginState: EventEmitter<any> = new EventEmitter();
  currentUser:User= new User();
  constructor(private _localService:LocalServiceService) {
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

login(user:string, password: string){
  this.currentUser.user=user;
  this.currentUser.password=password;
  this.currentUser.signIn=true
  this._localService.setJsonValue('User',this.currentUser)
  this.updateLoginState.emit(true)
}

logout(){
  this._localService.clearToken();
  this.updateLoginState.emit(false)
}
tokenTimeValidation(){

}
}
