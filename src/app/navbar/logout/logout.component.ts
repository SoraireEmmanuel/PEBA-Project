import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _Authentication:AuthenticationService,
              private _route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this._Authentication.logout();
  setTimeout(() => {
    this._route.navigate(['home'])
  }, 10);

}

}
