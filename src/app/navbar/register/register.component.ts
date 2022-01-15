import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { register } from 'src/app/clases/register';
import { TycService } from 'src/app/services/tyc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(public activeModal: NgbActiveModal, private _tyc:TycService) {
  }
  accept(){
    this._tyc.tyc$.emit(true);
    this.activeModal.close();
  }
  noAccept(){
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

  register:register= new register();
  forma: FormGroup;
  profesion = ["Fonoaudióloga/o", "Psicóloga/o", "Psicopedagoga/o"]

  constructor( private _ModalService:NgbModal, private _tyc:TycService, private _fb:FormBuilder) {
    this.forma = this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      profesion: ['', Validators.required],
      matricula: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      password1: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      password2: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      tyc: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this._tyc.tyc$.subscribe(res => {
      this.register.terminosycondiciones=res;
      this.forma.controls['tyc'].setValue(res);
      console.log(this.register.terminosycondiciones)
    });
  }
//Modal Function
open(register){
  const modalRef = this._ModalService.open(register, { size: 'xl' })
}

open2(){
const modalref2 = this._ModalService.open(NgbdModalContent, { scrollable: true });
}

//Validation Function
nombreValido() {
  return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
}
apellidoValido() {
  return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
}
profesionValido() {
  return this.forma.get('profesion')?.invalid && this.forma.get('profesion')?.touched
}
matriculaValido() {
  return this.forma.get('matricula')?.invalid && this.forma.get('matricula')?.touched
}
password1Valido() {
  return this.forma.get('password1')?.invalid && this.forma.get('password1')?.touched
}
password2Valido() {
  return this.forma.get('password2')?.value != this.forma.get('password1')?.value && this.forma.get('password2')?.touched
}
mailValido() {
  return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
}
terminosValido() {
  return this.forma.get('tyc')?.invalid && this.forma.get('tyc')?.touched
}
//Register Function
crearCuenta() {
  if (this.forma.invalid) {
    //this.toastr.error('Por favor verifique la informacion ingresada', 'ERROR');
    return Object.values(this.forma.controls).forEach(element => {
      element.markAsTouched();
    });
  }
  else {
    this.registerUser();
    //this.autenticacion.nuevoUsuario(this.profesional)
     // .subscribe ( respuesta => {
      //  console.log(respuesta);
      //})
    //this.toastr.success('Se envio un mail para validar el correo, haga click en el LINK!!', 'CREACION EXITOSA');
  }
}

registerUser(){
  this.register.apellido=this.forma.value.apellido;
  this.register.mail= this.forma.value.correo;
  this.register.matricula= this.forma.value.matricula;
  this.register.nombre= this.forma.value.nombre;
  this.register.password= this.forma.value.password1
  this.register.profesion= this.forma.value.profesion;
  this.register.terminosycondiciones= this.forma.value.tyc;
}

}
