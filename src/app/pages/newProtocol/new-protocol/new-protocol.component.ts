import { Component, OnInit } from '@angular/core';
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
import { PatientIdentification } from 'src/app/clases/PatientIdentification';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { Repeticion_CualitativaDTO } from 'src/app/clases/Repeticion_CualitativaDTO';
import { Repeticion_CuantitativaDTO } from 'src/app/clases/Repeticion_CuantitativaDTO';


@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.component.html',
  styleUrls: ['./new-protocol.component.css']
})
export class NewProtocolComponent implements OnInit {
  Protocol: ProtocoloDTO = new ProtocoloDTO();
  PatientIdentification: PatientIdentification = new PatientIdentification()
  Progress: number = 6;
  constructor() {


  }
  ngOnInit(): void {
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
  }
  chargeAuditiveCuantitativa(event: ComprensionAuditiva_CuantitativaDTO) {
    this.Protocol.ComprensionAuditiva_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();
  }
  chargeAuditiveCualitativa(event: ComprensionAuditiva_CualitativaDTO) {
    this.Protocol.ComprensionAuditiva_CualitativaDTO = event;
  }
  chargeOralCuantitativa(event: ExpresionOral_CuantitativaDTO) {
    this.Protocol.ExpresionOral_CuantitativaSTO = event;
    this.Protocol.totalCalcultaion();
  }
  chargeOralCualitativa(event: ExpresionOral_CualitativaDTO) {
    this.Protocol.ExpresionOral_CualitativaSTO = event;
  }
  chargeRepeticionCuantitativa(event: Repeticion_CuantitativaDTO) {
    this.Protocol.Repeticion_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();
  }
  chargeRepeticionCualitativa(event: Repeticion_CualitativaDTO) {
    this.Protocol.Repeticion_CualitativaDTO = event;
  }
  chargeDeniminacionCualitativa(event: Denominacion_CualitativaDTO) {
    this.Protocol.Denominacion_CualitativaDTO = event;
  }
  chargeDenominacionCuantitativa(event: Denominacion_CuantitativaDTO) {
    this.Protocol.Denominacion_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();
  }
  chargeReadingCualitativa(event: Lectura_CualitativaDTO) {
    this.Protocol.Lectura_CualitativaDTO = event;
  }
  chargeReadingCuantitativa(event: Lectura_CuantitativaDTO) {
    this.Protocol.Lectura_CuantitativaDTO = event;
    this.Protocol.totalCalcultaion();
  }
  chargeWritingCualitativa(event:Escritura_CualitativaDTO){
    this.Protocol.Escritura_CualitativaDTO=event;
  }
  chargeWritingCuantitativa(event:Escritura_CuantitativaDTO){
    this.Protocol.Escritura_CuantitativaDTO=event;
    this.Protocol.totalCalcultaion();
  }
  sendProtocol(event: ProtocoloDTO){
    //console.log(event);
  }
}
