import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {
code:string='';
mail:string='';
viewtemplate:number=0;
user:string='';
  constructor(private _rutaActiva: ActivatedRoute,
              private _auth:AuthenticationService) { }

  ngOnInit(): void {
    this.loadParams();
    this.activation(this.code, this.mail);
  }
  loadParams(){
    this._rutaActiva.queryParams.subscribe(params =>{
      this.code = params.ACode;
      this.mail=params.Mail;
      console.log(this.code);
      console.log(this.mail);
    })
  }
  activation(code:string, mail:string){
    this._auth.accountActivetion(code,mail).subscribe(resp=>{
      this.viewtemplate=1;
      this.user=resp.Nombre;
    },(error)=>{
      this.viewtemplate=2;
      console.log(error);
    })
  }
}
