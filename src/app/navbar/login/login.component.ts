import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    user:'',
    password:''
  }
  constructor(private _authentication:AuthenticationService,
    public _ModalService:NgbModal,
    private _route:Router,
    config: NgbModalConfig,
    private _toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  login(modal){
    const modalRef = this._ModalService.open(modal, {size: 'xl', centered: true});
    this._toastr.error('Por favor compruebe usuario y contraseña','No se pudo iniciar sesion.');
    setTimeout(() => {
      this._authentication.login(this.user.user,this.user.password);
      modalRef.close();
      this._toastr.success('Vienvenido XXXXX','Inicio de sesion exitoso');
      this._route.navigate(['myPatients'])
    }, 5000);
  }
}
