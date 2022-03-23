import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { exit } from 'process';
import { register } from 'src/app/clases/register';
import { TycService } from 'src/app/services/tyc.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(public activeModal: NgbActiveModal, private _tyc: TycService
              ) {
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
  constructor(private _ModalService: NgbModal, private _tyc: TycService, private _toastr:ToastrService) {

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
clearForm(){
  this.register1=new register();
}

  registerUser(modal) {
    if (!this.formValidation()) {
      return
    }
    if (true) {

      const modalSpiner = this._ModalService.open(modal, {size: 'xl', centered: true})
      setTimeout(() => {
        modalSpiner.close();
        this.modalRef.close();
        this.clearForm();
        this._toastr.success('La cuenta fue creada exitosamente','Creacion Exitosa');
      }, 5000);


      //this.modalRef.close();
      //enviar mensaje de cuenta creada exitosamente
    } else {
      //enviar mensaje de error
    }
  }
  formValidation() {
    if (this.register1.apellido == null || this.register1.apellido == '') {
      this._toastr.error('El campo "Apellido" es obligatorio','Compruebe los campos');
      return false;
    }
    if (this.register1.nombre == null || this.register1.nombre == '') {
      this._toastr.error('El campo "Nombre" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.register1.profesion == null || this.register1.nombre == '') {
      this._toastr.error('El campo "Profesion" es obligatorio','Compruebe los campos');
      return false

    }
    if (this.register1.profesion == 4 && (this.register1.cual == null || this.register1.cual=='')) {
      console.log('la validacion funciona')
      this._toastr.error('Si selecciono la opcion "Otro" en el campo "Profesion" debe especificar su profesion','Compruebe los campos');
      return false
    }
    if(!this.register1.mail.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')){
      this._toastr.error('Ingrese un e-mail valido','Compruebe los campos');
      return false
    }
    if(this.register1.password1 == null || this.register1.password1 == '' || this.register1.password1.length < 7){
      this._toastr.error('La contraseña debe ser mayor a 6 digitos','Compruebe los campos');
      return false
    }
    if(!(this.register1.password1 == this.register1.password2)){
      this._toastr.error('Las contraseñas no coinciden','Compruebe los campos');
      return false
    }
    if((this.register1.terminosycondiciones == null) || (this.register1.terminosycondiciones==false)){
      this._toastr.error('Debe aceptar los terminos y condiciones','Compruebe los campos');
      return false
    }
return true
  }
}
