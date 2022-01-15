export class register{
  nombre:string='';
  apellido:string='';
  profesion:string='';
  matricula:string='';
  password:string='';
  mail:string='';
  terminosycondiciones:boolean=false;

  contrustor(){
    this.nombre='';
    this.apellido='';
    this.profesion='';
    this.matricula='';
    this.password='';
    this.mail='';
    this.terminosycondiciones=false;
  }
}
