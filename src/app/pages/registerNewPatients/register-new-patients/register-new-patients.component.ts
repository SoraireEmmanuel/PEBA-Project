import { Component, OnInit } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { RegisterOptions } from 'src/app/clases/RegisterOptions';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/Patient/patient.service';
import { Pacientes } from 'src/app/clases/Pacientes';

@Component({
  selector: 'app-register-new-patients',
  templateUrl: './register-new-patients.component.html',
  styleUrls: ['./register-new-patients.component.css']
})
export class RegisterNewPatientsComponent implements OnInit {
  registerOptions: RegisterOptions = new RegisterOptions();
  patient: patient = new patient();
  paciente:Pacientes=new Pacientes();
  constructor(public _ModalService:NgbModal,
             config: NgbModalConfig,
             private _patientServices:PatientService,
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
  chargePaciente(){
    this.paciente.Bilingual=this.patient.isBilingual;
    this.paciente.BilingualIdioma=this.patient.bilingualLanguage;
    this.paciente.Cod_Paciente=this.patient.initialWithBrithDate;
    this.paciente.Dominancia=this.patient.handDominance;
    this.paciente.Estudios=this.patient.studies;
    this.paciente.FechaNacimiento=this.patient.brithDate;
    this.paciente.Iniciales=this.patient.initials;
    this.paciente.Cod_Paciente=this.patient.initials+this.patient.brithDate;
    if(this.patient.nativeLanguage == 3){
      this.paciente.Lengua=this.patient.otherLenguage
    }else{
      this.paciente.Lengua= String(this.patient.nativeLanguage )
    }
  }
  crearPaciente(modal) {
    const modalSpiner = this._ModalService.open(modal, {size: 'xl', centered: true})
    if (!this.formValidation()) {
      modalSpiner.close();
    }
    else{
      this.chargePaciente();
      this._patientServices.patientRegister(this.paciente).subscribe(resp=>{
        console.log(resp)
        this._toastr.success('Se registro el paciente exitosamente','Registro Exitoso');
        modalSpiner.close();
        this.clearForm();
      },(error)=>{
        console.log(error)
        modalSpiner.close();
        this._toastr.error('No pudo realizarse el registro, intenete nuevamente en unos segundos','Fallo el registro');
      })
    }
  }
}
