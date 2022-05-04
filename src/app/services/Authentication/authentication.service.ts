import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/clases/user';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { HttpClientModule, HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from 'src/app/clases/login';
import { register } from 'src/app/clases/register';
import { PasswordServiceService } from '../CryptoServices/PasswordService/password-service.service';

const URI = environment.PEBA_Api_URL_Base;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() updateLoginState: EventEmitter<any> = new EventEmitter();
  currentUser:User= new User();
  constructor(private _localService:LocalServiceService,
              private _passwordCrypto:PasswordServiceService,
              private _http:HttpClient
              ) {
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

registerProfesional(profesional: register):Observable<any>{
  var RegistrarProfesional = {
    Id_Profesional:0,
    Nombre:`${profesional.nombre}`,
    Apellido:`${profesional.apellido}`,
    Profesion:`${profesional.profesion}`,
    PasswordCuenta:`${profesional.password1}`,
    Matricula:`${profesional.matricula}`,
    Mail:`${profesional.mail}`,
    Terminosycondicioes:`${profesional.terminosycondiciones}`,
    ValidatedEmail:true
  };
  return this._http.post(`${URI}RegistrarProfesional`, RegistrarProfesional);
}

accountActivetion(code:string, mail:string):Observable<any>{
  var activarCuenta = {
    Mail: `${mail}`,
    Code:`${code}`
  };
  return this._http.post(`${URI}activarCuenta`, activarCuenta);
}


}
