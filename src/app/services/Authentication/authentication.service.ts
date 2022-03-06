import { Injectable, EventEmitter, Output } from '@angular/core';
import { Account } from 'src/app/clases/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() updateLoginState: EventEmitter<any> = new EventEmitter();

  constructor() {
      this.updateLoginState.emit(false)
}
currentAuthotentication():any{

}

login(){
  this.updateLoginState.emit(true)

}

logout(){
  this.updateLoginState.emit(false)
}
}
