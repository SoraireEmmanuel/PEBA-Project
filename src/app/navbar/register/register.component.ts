import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
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
  register1:register= new register();
  profesion = [{description:"Fonoaudióloga/o",value:0},{description:"Psicóloga/o",value:1},{description:"Psicopedagoga/o",value:2},{description:"Medico/a",value:3},{description:"Otro",value:4}];

  constructor( private _ModalService:NgbModal, private _tyc:TycService) {
console.log(this.register1)
  }

  ngOnInit(): void {
    this._tyc.tyc$.subscribe(res => {
      this.register1.terminosycondiciones=res;
      console.log(this.register1.terminosycondiciones)
    });

  }
//Modal Function
open(register){
  const modalRef = this._ModalService.open(register, { size: 'xl' })
}
open2(){
const modalref2 = this._ModalService.open(NgbdModalContent, { scrollable: true });
}

//Register Function
crearCuenta() {
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

registerUser(){

}

}
