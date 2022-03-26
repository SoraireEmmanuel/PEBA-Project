import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginstate:boolean;
  constructor(private _ViewComponent:AuthenticationService,
              private _localService:LocalServiceService) {
  }
  ngOnInit(): void {
    this.loginstate=this._ViewComponent.validationLogin();
    this._ViewComponent.updateLoginState.subscribe(res=>{
      this.loginstate=res
    })
    console.log(this._localService.getJsonValue('protocolo enviado'))
  }

}
