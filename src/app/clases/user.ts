export class Account{
  user:string='';
  token:string='';
  tokenExpiration:Date=new Date();
  signIn?:boolean=false;
  contrustor(){
  }
}
