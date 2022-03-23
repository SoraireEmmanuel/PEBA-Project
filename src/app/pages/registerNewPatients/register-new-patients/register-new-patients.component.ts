import { Component, OnInit } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { RegisterOptions } from 'src/app/clases/RegisterOptions';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-new-patients',
  templateUrl: './register-new-patients.component.html',
  styleUrls: ['./register-new-patients.component.css']
})
export class RegisterNewPatientsComponent implements OnInit {
  registerOptions: RegisterOptions = new RegisterOptions();
  patient: patient = new patient();
  constructor(public _ModalService:NgbModal,
             config: NgbModalConfig,
             private _toastr:ToastrService) {
              config.backdrop = 'static';
              config.keyboard = false;
  }
  ngOnInit(): void {
  }
  convertirMayuscula() {
    this.patient.initials = this.patient.initials.toUpperCase();
  }
  clearForm(){
    this.patient.bilingualLanguage=null
    this.patient.brithDate=null
    this.patient.handDominance=null
    this.patient.id=null
    this.patient.initialWithBrithDate=null
    this.patient.initials=null
    this.patient.isBilingual=null
    this.patient.nativeLanguage=null
    this.patient.otherLenguage=null
    this.patient.studies=null
  }
  formValidation() {
    if (this.patient.initials == null || this.patient.initials == '') {
      this._toastr.error('El campo "Iniciales" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.patient.brithDate == null || this.patient.brithDate == '') {
      this._toastr.error('El campo "Fecha de Nacimiento" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.patient.nativeLanguage == null) {
      this._toastr.error('El campo "Lengua Materna" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.patient.nativeLanguage == 3 &&
      (this.patient.otherLenguage == null || this.patient.otherLenguage == '')) {
        this._toastr.error('Si selecciona "Otro" en el campo "Lengua Materna" debe especificar cual','Compruebe los campos');
      return false
    }
    if (this.patient.isBilingual == null) {
      this._toastr.error('El campo "¿Es Bilingüe?" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.patient.isBilingual &&
      (this.patient.bilingualLanguage == null || this.patient.bilingualLanguage == '')) {
        this._toastr.error('Si selecciono "Si" en el campo "¿Es bilingúe?" debe especificar el segundio idioma','Compruebe los campos');
      return false
    }
    if (this.patient.handDominance == null) {
      this._toastr.error('El campo "Dominancia Manual" es obligatorio','Compruebe los campos');
      return false
    }
    if (this.patient.studies == null) {
      this._toastr.error('El campo "Estudios" es obligatorio','Compruebe los campos');
      return false
    }
    return true
  }
  crearPaciente(modal) {

    if (!this.formValidation()) {

    }
    else{
      const modalSpiner = this._ModalService.open(modal, {size: 'xl', centered: true})
      this._toastr.error('No pudo realizarse el registro, intenete nuevamente en unos segundos','Fallo el registro');
      setTimeout(() => {
        modalSpiner.close();
        this._toastr.success('Se registro el paciente exitosamente','Registro Exitoso');

      }, 5000);
    }
  }
}
