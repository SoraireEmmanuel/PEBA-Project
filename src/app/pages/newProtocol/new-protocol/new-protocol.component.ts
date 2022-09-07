import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprensionAuditiva_CualitativaDTO } from 'src/app/clases/ComprensionAuditiva_CualitativaDTO';
import { ComprensionAuditiva_CuantitativaDTO } from 'src/app/clases/ComprensionAuditiva_CuantitativaDTO';
import { Denominacion_CualitativaDTO } from 'src/app/clases/Denominacion_CualitativaDTO';
import { Denominacion_CuantitativaDTO } from 'src/app/clases/Denominacion_CuantitativaDTO';
import { Escritura_CualitativaDTO } from 'src/app/clases/Escritura_CualitativaDTO';
import { Escritura_CuantitativaDTO } from 'src/app/clases/Escritura_CuantitativaDTO';
import { ExpresionOral_CualitativaDTO } from 'src/app/clases/ExpresionOral_CualitativaDTO';
import { ExpresionOral_CuantitativaDTO } from 'src/app/clases/ExpresionOral_CuantitativaDTO';
import { Lectura_CualitativaDTO } from 'src/app/clases/Lectura_CualitativaDTO';
import { Lectura_CuantitativaDTO } from 'src/app/clases/Lectura_CuantitativaDTO';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { patient } from 'src/app/clases/patient';
import { PatientIdentification } from 'src/app/clases/PatientIdentification';
import { ProtocolDTO } from 'src/app/clases/ProtocolDTO';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { Repeticion_CualitativaDTO } from 'src/app/clases/Repeticion_CualitativaDTO';
import { Repeticion_CuantitativaDTO } from 'src/app/clases/Repeticion_CuantitativaDTO';
import { User } from 'src/app/clases/user';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';


@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.component.html',
  styleUrls: ['./new-protocol.component.css']
})
export class NewProtocolComponent implements OnInit {
  Protocol: ProtocoloDTO = new ProtocoloDTO();
  Prot:ProtocolDTO=new ProtocolDTO();
  PatientIdentification: PatientIdentification = new PatientIdentification()
  Progress: number = 0;
  constructor(private _loadService:LocalServiceService,
                  private _rutaActiva: ActivatedRoute,) {

  }
  ngOnInit(): void {
    this._loadService.setJsonValue('ExitProtocol',{ExitProtocol: true})
    this.loadParams();

  }

  loadParams(){
    this._rutaActiva.queryParams.subscribe(params =>{
      this.PatientIdentification.brithDate = params.FechaNacimiento;
      this.Prot.PacienteFechaNacimiento=params.FechaNacimiento;
      this.PatientIdentification.handDominance = params.Dominancia;
      this.Prot.PacienteDominancia= params.Dominancia
      this.PatientIdentification.initialWithBrithDate = params.Cod_Paciente;
      this.Prot.PacienteCod_Paciente=params.Cod_Paciente
      this.PatientIdentification.nativeLanguage = params.Lengua;
      this.Prot.PacienteLengua=params.Lengua
      this.PatientIdentification.studies = params.Estudios;
      this.Prot.PacienteEstudios =params.Estudios;
      if(params.Bilingual == 'true'){
        this.PatientIdentification.isBilingual = true;
      }
      else{
        this.PatientIdentification.isBilingual = false;
      }

      this.Prot.PacienteBilingual== params.Bilingual;
      this.PatientIdentification.bilingualLanguage = params.BilingualIdioma;
      this.Prot.PacienteBilingualIdioma = params.BilingualIdioma;
      this.Prot.Id_Paciente= params.Id_Paciente;
      var CurrentUser:User=this._loadService.getJsonValue('User');
      this.Prot.Id_Profesional=CurrentUser.Id_Usuario;
      console.log(this.Prot);

    })
  }

  progressEvent(event: number) {
    console.log(event)
    this.Progress = this.Progress + event;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  chargePatientIdentificator(event: PatientIdentification) {
    this.Protocol.ResumenClinico = event.ResumenClinico;
    this.Protocol.Fecha_Protocolo = event.FechaProtocolo;
    this.PatientIdentification.ResumenClinico = event.ResumenClinico;
    this.PatientIdentification.FechaProtocolo = event.FechaProtocolo;

    //cambio al nuevo tipo de objeto
    this.Prot.ResumenClinico = event.ResumenClinico;
    this.Prot.Fecha_Protocolo = event.FechaProtocolo;
    this.Prot.ResumenClinico = event.ResumenClinico;
    this.Prot.Fecha_Protocolo = event.FechaProtocolo;
  }
chargeSintomasNeurologicos(event:NeurologicalSymptomsDropdownOption){
  //console.log(event)

}

  chargeAuditiveCuantitativa(event: ComprensionAuditiva_CuantitativaDTO) {
    this.Protocol.ComprensionAuditiva_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();

    //new logic
    this.Prot.ComprensionAuditiva_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }
  chargeAuditiveCualitativa(event: ComprensionAuditiva_CualitativaDTO) {
    this.Protocol.ComprensionAuditiva_CualitativaDTO = event;

    //new logic
    this.Prot.ComprensionAuditiva_Cualitativa=event;
  }
  chargeOralCuantitativa(event: ExpresionOral_CuantitativaDTO) {
    this.Protocol.ExpresionOral_CuantitativaSTO = event;
    this.Protocol.totalCalcultaion();

    //new logic
    this.Prot.ExpresionOral_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }

  chargeOralCualitativa(event: ExpresionOral_CualitativaDTO) {
    this.Protocol.ExpresionOral_CualitativaSTO = event;

    //new logic
    this.Prot.ExpresionOral_Cualitativa=event;
  }
  chargeRepeticionCuantitativa(event: Repeticion_CuantitativaDTO) {
    this.Protocol.Repeticion_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();

    //new logic
    this.Prot.Repeticion_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }
  chargeRepeticionCualitativa(event: Repeticion_CualitativaDTO) {
    this.Protocol.Repeticion_CualitativaDTO = event;

    //new logic
    this.Prot.Repeticion_Cualitativa = event;

  }
  chargeDeniminacionCualitativa(event: Denominacion_CualitativaDTO) {
    this.Protocol.Denominacion_CualitativaDTO = event;

    //new logic
    this.Prot.Denominacion_Cualitativa = event;

  }
  chargeDenominacionCuantitativa(event: Denominacion_CuantitativaDTO) {
    this.Protocol.Denominacion_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();

    //new logic
    this.Prot.Denominacion_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }
  chargeReadingCualitativa(event: Lectura_CualitativaDTO) {
    this.Protocol.Lectura_CualitativaDTO = event;

    //new logic
    this.Prot.Lectura_Cualitativa = event;
  }
  chargeReadingCuantitativa(event: Lectura_CuantitativaDTO) {
    this.Protocol.Lectura_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();

    //new logic
    this.Prot.Lectura_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }
  chargeWritingCualitativa(event:Escritura_CualitativaDTO){
    this.Protocol.Escritura_CualitativaDTO=event;

    //new logic
    this.Prot.Escritura_Cualitativa=event;
  }
  chargeWritingCuantitativa(event:Escritura_CuantitativaDTO){
    this.Protocol.Escritura_CuantitativaDTO=event;
    this.Protocol.totalCalcultaion();

    this.Prot.Escritura_Cuantitativa=event;
    this.Prot.totalCalcultaion();
  }
  sendProtocol(event: ProtocoloDTO){
    this._loadService.removeKey('ExitProtocol')
  }

}
