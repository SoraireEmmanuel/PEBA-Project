import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { exit } from 'process';
import { register } from 'src/app/clases/register';
import { TycService } from 'src/app/services/tyc.service';

//Modal Terminos y Condiciones Component
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello!! INFORMACIÓN RELEVANTE</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="accept()">Acepto</button>
      <button type="button" class="btn btn-outline-dark" (click)="noAccept()">No Acepto</button>
    </div>
  `
})
export class NgbdModalContent {
  constructor(public activeModal: NgbActiveModal, private _tyc: TycService) {
  }
  accept() {
    this._tyc.tyc$.emit(true);
    this.activeModal.close();
  }
  noAccept() {
    this._tyc.tyc$.emit(false);
    this.activeModal.close();
  }
}

//main component
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  register1: register = new register();
  profesion = [{ description: "Fonoaudióloga/o", value: 0 }, { description: "Psicóloga/o", value: 1 }, { description: "Psicopedagoga/o", value: 2 }, { description: "Medico/a", value: 3 }, { description: "Otro", value: 4 }];
  modalRef: any;
  constructor(private _ModalService: NgbModal, private _tyc: TycService) {
    console.log(this.register1)
  }
  ngOnInit(): void {
    this._tyc.tyc$.subscribe(res => {
      this.register1.terminosycondiciones = res;
      console.log(this.register1.terminosycondiciones)
    });
  }
  //Modal Function
  open(register) {
    this.modalRef = this._ModalService.open(register, { size: 'xl' })
  }
  open2() {
    const modalref2 = this._ModalService.open(NgbdModalContent, { scrollable: true });
  }

  //Register Function
  crearCuenta(): boolean {
    return true
    //  if (true) {
    //this.toastr.error('Por favor verifique la informacion ingresada', 'ERROR');

    //   });
    // }
    // else {

    //this.autenticacion.nuevoUsuario(this.profesional)
    // .subscribe ( respuesta => {
    //  console.log(respuesta);
    //})
    //this.toastr.success('Se envio un mail para validar el correo, haga click en el LINK!!', 'CREACION EXITOSA');
    //}
  }
  registerUser() {
    if (!this.formValidation()) {
      return
    }
    if (this.crearCuenta()) {
      this.modalRef.close();
      //enviar mensaje de cuenta creada exitosamente
    } else {
      //enviar mensaje de error
    }
  }
  formValidation() {
    if (this.register1.apellido == null || this.register1.apellido == '') {
      return false;
      //Mensaje de error que el apellido es requerido
    }
    if (this.register1.nombre == null || this.register1.nombre == '') {
      return false
      //Mensaje error que el nombre es requerido
    }
    if (this.register1.profesion == null || this.register1.nombre == '') {
      return false
      //Mensaje error que es necesario indicar una profesion
    }
    if (this.register1.profesion == 4 && (this.register1.cual == null || this.register1.cual=='')) {
      console.log('la validacion funciona')
      return false
      //Mensaje error que es necesario indicar una profesion en cual
    }
    if(!this.register1.mail.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')){
      console.log('mail invalido')
      return false
    }
    if(this.register1.password1 == null || this.register1.password1 == '' || this.register1.password1.length < 7){
      console.log('Password muy corta')
      return false
    }
    if(!(this.register1.password1 == this.register1.password2)){
      console.log('Las password no coinciden')
      return false
    }
return true
  }
}
