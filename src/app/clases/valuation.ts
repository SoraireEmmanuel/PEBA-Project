import { ProtocolDTO } from "./ProtocolDTO";

export class Valuation{
  Auditiva:string= '';
  Oral:string= '';
  Repeticion:string= '';
  Denominacion:string= '';
  Lectura:string= '';
  Escritura:string= '';
  constructor(){
  }
  valuationChargeAll(Prot:ProtocolDTO){
    this.Auditiva= this.valuationCharge(Prot.ComprensionAuditiva_Cuantitativa.SubTotal)
    this.Oral= this.valuationCharge(Prot.ExpresionOral_Cuantitativa.SubTotal)
    this.Repeticion= this.valuationCharge(Prot.Repeticion_Cuantitativa.SubTotal)
    this.Denominacion= this.valuationCharge(Prot.Denominacion_Cuantitativa.SubTotal)
    this.Lectura= this.valuationCharge(Prot.Lectura_Cuantitativa.SubTotal)
    this.Escritura= this.valuationCharge(Prot.Escritura_Cuantitativa.SubTotal)
  }

  valuationCharge(value: number): string {
    if (value == 6) {
      return 'Conservada';
    }
    if (value < 6 && value >= 5) {
      return 'Alteración Leve';
    }
    if (value < 5 && value >= 3) {
      return 'Alteración Moderada';
    }
    if (value < 3 && value >= 0) {
      return 'Alteración Severa';
    }
  }






}
