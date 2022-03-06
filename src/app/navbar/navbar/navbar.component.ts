import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/clases/user';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { TycService } from 'src/app/services/tyc.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginstate:boolean;
  constructor(private _ViewComponent:AuthenticationService) {
  }
  ngOnInit(): void {
    this._ViewComponent.updateLoginState.subscribe(res=>{
      this.loginstate=res
    })
  }

}
