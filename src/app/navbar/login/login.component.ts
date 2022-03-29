import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/clases/login';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login= new Login();
  constructor(private _authentication:AuthenticationService,
    public _ModalService:NgbModal,
    private _route:Router,
    private _localService:LocalServiceService,
    config: NgbModalConfig,
    private _toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  login(modal){
    const modalRef = this._ModalService.open(modal, {size: 'xl', centered: true});
    this._authentication.login(this.user).subscribe(resp =>{
      modalRef.close();
      this._authentication.loginState();
      var currentUser:User = resp;
      currentUser.signIn=true;
      this._localService.setJsonValue('User',currentUser)
      localStorage.setItem('User',JSON.stringify(currentUser));
      this._toastr.success(`Vienvenido ${resp.Mail}, Inicio de sesion exitoso`);
      this._route.navigate(['myPatients'])
    },
    (error) => {
      this._toastr.error('Por favor compruebe usuario y contraseña','No se pudo iniciar sesion.');
      modalRef.close();
      console.log(error);
    })
  }
}
