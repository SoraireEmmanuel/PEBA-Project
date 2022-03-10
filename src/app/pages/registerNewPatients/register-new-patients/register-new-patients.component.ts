import { Component, OnInit } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { RegisterOptions } from 'src/app/clases/RegisterOptions';

@Component({
  selector: 'app-register-new-patients',
  templateUrl: './register-new-patients.component.html',
  styleUrls: ['./register-new-patients.component.css']
})
export class RegisterNewPatientsComponent implements OnInit {
  registerOptions: RegisterOptions = new RegisterOptions();
  patient: patient = new patient();
  constructor() {
  }
  ngOnInit(): void {
  }
convertirMayuscula(){
  this.patient.initials=this.patient.initials.toUpperCase();
 }
  formValidation() {
    if (this.patient.initials == null || this.patient.initials == '') {
      return false
    }
    if (this.patient.brithDate == null || this.patient.brithDate == '') {
      return false
    }
    if (this.patient.nativeLanguage == null) {
      return false
    }
    if (this.patient.nativeLanguage == 3 &&
      (this.patient.otherLenguage == null || this.patient.otherLenguage == '')) {
      return false
    }
    if (this.patient.isBilingual == null) {
      return false
    }
    if (this.patient.isBilingual &&
      (this.patient.bilingualLanguage == null || this.patient.bilingualLanguage == '')) {
      return false
    }
    if (this.patient.handDominance == null) {
      return false
    }
    if(this.patient.studies==null){
      return false
    }
    return true
  }
  crearPaciente() {
    if(!this.formValidation()){
      console.log('no se envia el formulario')
    }


    //   if (this.forma.invalid){
    //   this.toastr.error('Todos los campos son obligatorios', 'ERROR');
    //     return Object.values(this.forma.controls).forEach(element => {
    //       element.markAsTouched();
    //     });
    //
    //   }
    //   else{
    //     this.convertirMayuscula();
    //     this.pacienteClass();
    //  console.log(this.paciente);
    // this.mispacientes.nuevopaciente(this.paciente).subscribe(res=>{
    //   console.log(res);
    // })

    // }
  }
}
