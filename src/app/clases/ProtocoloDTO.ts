
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

export class ProtocoloDTO{
  Fecha_Protocolo:string=null;
  ResumenClinico:string=null;
  Total: number=null;
  ConclusionesRecomendaciones:string=null
  SintomasNeurologicosDTO:SintomasNeurologicosDTO;
  ComprensionAuditiva_CuantitativaDTO:ComprensionAuditiva_CuantitativaDTO;
  Denominacion_CuantitativaDTO:Denominacion_CuantitativaDTO;
  Escritura_CuantitativaDTO:Escritura_CuantitativaDTO;
  ExpresionOral_CuantitativaSTO:ExpresionOral_CuantitativaDTO;
  Lectura_CuantitativaDTO:Lectura_CuantitativaDTO;
  Repeticion_CuantitativaDTO:Repeticion_CuantitativaDTO;
  ComprensionAuditiva_CualitativaDTO:ComprensionAuditiva_CualitativaDTO;
  Denominacion_CualitativaDTO:Denominacion_CualitativaDTO;
  Escritura_CualitativaDTO:Escritura_CualitativaDTO;
  ExpresionOral_CualitativaSTO:ExpresionOral_CualitativaDTO;
  Lectura_CualitativaDTO:Lectura_CualitativaDTO;
  Repeticion_CualitativaDTO:Repeticion_CualitativaDTO;

  constructor(){

  }
}
