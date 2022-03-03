import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patient } from 'src/app/clases/patient';
import { RegisterOptions } from 'src/app/clases/RegisterOptions';

@Component({
  selector: 'app-register-new-patients',
  templateUrl: './register-new-patients.component.html',
  styleUrls: ['./register-new-patients.component.css']
})
export class RegisterNewPatientsComponent implements OnInit {
  registerOptions:RegisterOptions=new RegisterOptions();
  patient:patient=new patient();

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
  }


 // convertirMayuscula(){
 //   this.forma.value.iniciales=this.forma.value.iniciales.toUpperCase();
  //  console.log(this.forma)
 // }

  crearPaciente(){
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
