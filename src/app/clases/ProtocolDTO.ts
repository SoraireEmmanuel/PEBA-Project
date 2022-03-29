
import { ComprensionAuditiva_CualitativaDTO } from "./ComprensionAuditiva_CualitativaDTO";
import { ComprensionAuditiva_CuantitativaDTO } from "./ComprensionAuditiva_CuantitativaDTO";
import { Denominacion_CualitativaDTO } from "./Denominacion_CualitativaDTO";
import { Denominacion_CuantitativaDTO } from "./Denominacion_CuantitativaDTO";
import { Escritura_CualitativaDTO } from "./Escritura_CualitativaDTO";
import { Escritura_CuantitativaDTO } from "./Escritura_CuantitativaDTO";
import { ExpresionOral_CualitativaDTO } from "./ExpresionOral_CualitativaDTO";
import { ExpresionOral_CuantitativaDTO } from "./ExpresionOral_CuantitativaDTO";
import { Lectura_CualitativaDTO } from "./Lectura_CualitativaDTO";
import { Lectura_CuantitativaDTO } from "./Lectura_CuantitativaDTO";
import { Repeticion_CualitativaDTO } from "./Repeticion_CualitativaDTO";
import { Repeticion_CuantitativaDTO } from "./Repeticion_CuantitativaDTO";
import { SintomasNeurologicosDTO } from "./SintomasNeurologicosDTO";

export class ProtocolDTO{
  Fecha_Protocolo?:string= null;
  ResumenClinico?:string= null;
  Total?:number= null;
  ConclusionesRecomendaciones?:string = null;
  PacienteBilingual?:string = null;
  PacienteBilingualIdioma?:string = null;
  PacienteCod_Paciente?:number = null;
  PacienteDominancia?:string = null;
  PacienteEstudios?:string = null;
  PacienteFechaNacimiento?:string = null;
  PacienteId_Paciente?:string = null;
  PacienteLengua?:string = null;
  ComprensionAuditiva_Cualitativa?:ComprensionAuditiva_CualitativaDTO=new ComprensionAuditiva_CualitativaDTO();
  Denominacion_Cualitativa?:Denominacion_CualitativaDTO= new Denominacion_CualitativaDTO();
  Escritura_Cualitativa?:Escritura_CualitativaDTO= new Escritura_CualitativaDTO();
  ExpresionOral_Cualitativa?:ExpresionOral_CualitativaDTO = new ExpresionOral_CualitativaDTO();
  Lectura_Cualitativa?:Lectura_CualitativaDTO =new Lectura_CualitativaDTO();
  Repeticion_Cualitativa?:Repeticion_CualitativaDTO= new Repeticion_CualitativaDTO();
  SintomasNeurologicos?:SintomasNeurologicosDTO=new SintomasNeurologicosDTO();
  ComprensionAuditiva_Cuantitativa?:ComprensionAuditiva_CuantitativaDTO=new ComprensionAuditiva_CuantitativaDTO();
  Denominacion_Cuantitativa?:Denominacion_CuantitativaDTO=new Denominacion_CuantitativaDTO();
  Escritura_Cuantitativa?:Escritura_CuantitativaDTO=new Escritura_CuantitativaDTO();
  ExpresionOral_Cuantitativa?:ExpresionOral_CuantitativaDTO=new ExpresionOral_CuantitativaDTO();
  Lectura_Cuantitativa?:Lectura_CuantitativaDTO=new Lectura_CuantitativaDTO();
  Repeticion_Cuantitativa?:Repeticion_CuantitativaDTO= new Repeticion_CuantitativaDTO();

  constructor(){

  }
  totalCalcultaion(){
    this.Total= this.Denominacion_Cuantitativa.SubTotal+
                this.Repeticion_Cuantitativa.SubTotal+
                this.Lectura_Cuantitativa.SubTotal+
                this.Escritura_Cuantitativa.SubTotal+
                this.ExpresionOral_Cuantitativa.SubTotal+
                this.ComprensionAuditiva_Cuantitativa.SubTotal;
  }
}
