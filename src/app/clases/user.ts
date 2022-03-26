export class User{
  user:string='';
  password:string='';
  token:string='';
  tokenCreate:Date= new Date();
  tokenExpiration:Date=new Date();
  signIn:boolean=false;
  contrustor(){
  }
}
