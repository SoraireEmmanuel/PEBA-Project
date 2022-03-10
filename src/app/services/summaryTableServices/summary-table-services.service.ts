import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprensionAuditiva_CualitativaDTO } from 'src/app/clases/ComprensionAuditiva_CualitativaDTO';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { summaryCualitativeTable } from 'src/app/clases/summaryCualitativeTable';

@Injectable({
  providedIn: 'root'
})
export class SummaryTableServicesService {
summaryCualitativo:summaryCualitativeTable=new summaryCualitativeTable();
  constructor() { }

summaryCualitativa():any{
//this.summaryAuditivaCualitativa(protocolo.ComprensionAuditiva_CualitativaDTO);
return this.summaryCualitativo;
}

//summaryAuditivaCualitativa(ComprensionAuditiva_CualitativaDTO:ComprensionAuditiva_CualitativaDTO){
//  if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada != null) {
//    if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 1) {
//      this.summaryCualitativo.auditiva.EmparejamientoPalabraOida = 'asdf'
//      if (ComprensionAuditiva_CualitativaDTO.POErroresFormales == true) {
//        this.summaryCualitativo.auditiva.EmparejamientoPalabraOida = this.summaryCualitativo.auditiva.EmparejamientoPalabraOida + '<Errores formales>'
//      }
//      if (ComprensionAuditiva_CualitativaDTO.POErroresSemanticos == true) {
//        this.summaryCualitativo.auditiva.EmparejamientoPalabraOida = this.summaryCualitativo.auditiva.EmparejamientoPalabraOida + '<Errores semánticos>'
//      }
//      if (ComprensionAuditiva_CualitativaDTO.POErroresNoRelacionados == true) {
//        this.summaryCualitativo.auditiva.EmparejamientoPalabraOida = this.summaryCualitativo.auditiva.EmparejamientoPalabraOida + '<Erroes no relacionados>'
//      }
//    }
//    if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 0) {
//      this.summaryCualitativo.auditiva.EmparejamientoPalabraOida = '<No se observaron Alteraciones en el emparejamiento palabra Oída-dibujo>'
//    }
//  }
//  if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada != null) {
//    if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 1) {
//      this.summaryCualitativo.auditiva.ComandosOidos = 'Se observaron las siguientes Alteraciones en los comandos oídos: '
//      if (ComprensionAuditiva_CualitativaDTO.COCambiaElOrdenDelComando == true) {
//        this.summaryCualitativo.auditiva.ComandosOidos = this.summaryCualitativo.auditiva.ComandosOidos + '<Cambia el orden del comando> '
//      }
//      if (ComprensionAuditiva_CualitativaDTO.COOmiteParteDelComando == true) {
//        this.summaryCualitativo.auditiva.ComandosOidos = this.summaryCualitativo.auditiva.ComandosOidos + '<Omite parte del Comando>'
//      }
//      if (ComprensionAuditiva_CualitativaDTO.COSustituyeParteDelComando == true) {
//        this.summaryCualitativo.auditiva.ComandosOidos = this.summaryCualitativo.auditiva.ComandosOidos + '<Sustituye parte del Comando>'
//      }
//    }
//    if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 0) {
//      this.summaryCualitativo.auditiva.ComandosOidos = 'No se observaron Alteraciones en los comandos oídos'
//    }
//  }
//  if(ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == null &&
//    ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == null){
//      this.summaryCualitativo.auditiva.EmparejamientoPalabraOida='No se realizaron observaciones cualitativas.'
//  }
//}



}
