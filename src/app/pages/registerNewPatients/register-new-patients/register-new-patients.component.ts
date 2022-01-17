import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-new-patients',
  templateUrl: './register-new-patients.component.html',
  styleUrls: ['./register-new-patients.component.css']
})
export class RegisterNewPatientsComponent implements OnInit {
  lengua=["Español","Portugues","Ingles"];
  dominancia=["Ambidiestro","Diestro","Zurdo"];
  estudios=["Primaria Incompleta","Primaria Completa","Secundaria Incompleta","Secundaria Completa", "Terciario Incompleto","Terciario Completo","Universitario Incompleto", "Universitario Completo","Sin Estudios"];
  forma:FormGroup;

  constructor(private fb:FormBuilder) {
    this.forma=this.fb.group({
      iniciales:['', [Validators.required, Validators.minLength(2)] ],
      nacimiento:['', Validators.required],
      lengua:['', Validators.required],
      dominancia:['', Validators.required],
      estudios:['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  inicialesValido(){
    return this.forma.get('iniciales')?.invalid && this.forma.get('iniciales')?.touched
  }
  nacimientoValido(){
    return this.forma.get('nacimiento')?.invalid && this.forma.get('nacimiento')?.touched
  }
  lenguaValido(){
    return this.forma.get('lengua')?.invalid && this.forma.get('lengua')?.touched
  }
  diminanciaValido(){
    return this.forma.get('dominancia')?.invalid && this.forma.get('dominancia')?.touched
  }
  estudiosValido(){
    return this.forma.get('estudios')?.invalid && this.forma.get('estudios')?.touched
  }
  convertirMayuscula(){
    this.forma.value.iniciales=this.forma.value.iniciales.toUpperCase();
    console.log(this.forma)
  }
  pacienteClass(){
  //  this.paciente.Cod_Paciente=this.forma.value.iniciales+this.forma.value.nacimiento;
  //  this.paciente.Iniciales=this.forma.value.iniciales;
  //  this.paciente.FechaNacimiento=this.forma.value.nacimiento;
  //  this.paciente.Lengua=this.forma.value.lengua;
  //  this.paciente.Dominancia=this.forma.value.dominancia;
  //  this.paciente.Estudios=this.forma.value.estudios;
  //  this.paciente.Id_Profesional=localStorage.getItem('idusuario');
  }
  crearPaciente(){
    if (this.forma.invalid){
   //   this.toastr.error('Todos los campos son obligatorios', 'ERROR');
      return Object.values(this.forma.controls).forEach(element => {
        element.markAsTouched();
      });

    }
    else{
      this.convertirMayuscula();
      this.pacienteClass();
    //  console.log(this.paciente);
     // this.mispacientes.nuevopaciente(this.paciente).subscribe(res=>{
     //   console.log(res);
     // })

    }
  }
}
