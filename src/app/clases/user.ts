export class User{
  Id_Usuario:number=null;
  Token:string='';
  CreacionToken:Date= new Date();
  VencimientoToken:Date=new Date();
  Mail:string='';
  SegundaClave:string='';
  signIn?:boolean=false;
  contrustor(){
  }
}
