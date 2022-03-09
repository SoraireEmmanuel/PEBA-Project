import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Lectura_CualitativaDTO } from 'src/app/clases/Lectura_CualitativaDTO';
import { Lectura_CuantitativaDTO } from 'src/app/clases/Lectura_CuantitativaDTO';
import { QuestionStep5 } from 'src/app/clases/QuestionStep5';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<Lectura_CualitativaDTO>();
  @Output()emitCuantitativa = new EventEmitter<Lectura_CuantitativaDTO>();
  @Input() lecturacuantitativa: Lectura_CuantitativaDTO;
  @Input() lecturacualitativa: Lectura_CualitativaDTO;
DropdownOptions:QuestionStep5=new QuestionStep5();
LecturaCuantitativa:Lectura_CuantitativaDTO=new Lectura_CuantitativaDTO();
LecturaCualitativa:Lectura_CualitativaDTO=new Lectura_CualitativaDTO();
CopyLecturaCualitativa:Lectura_CualitativaDTO=new Lectura_CualitativaDTO();
popupsave:boolean;
  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  ngOnInit(): void {
    this.LecturaCualitativa=this.lecturacualitativa;
    this.LecturaCuantitativa=this.lecturacuantitativa;
    //this.CopyLecturaCualitativa=this.lecturacualitativa;
    this.copycharge();
    this.popUpValidation();
  }
copycharge(){
  this.CopyLecturaCualitativa.CDCEAlteracionDelOrden=this.lecturacualitativa.CDCEAlteracionDelOrden;
  this.CopyLecturaCualitativa.CDCEOmisionDeParte=this.lecturacualitativa.CDCEOmisionDeParte;
  this.CopyLecturaCualitativa.CDCESustitucionDeParte=this.lecturacualitativa.CDCESustitucionDeParte;
  this.CopyLecturaCualitativa.ComprensionDeComandoEscrito=this.lecturacualitativa.ComprensionDeComandoEscrito;
  this.CopyLecturaCualitativa.EPEDErroresFormales=this.lecturacualitativa.EPEDErroresFormales;
  this.CopyLecturaCualitativa.EPEDErroresNoRelacionados=this.lecturacualitativa.EPEDErroresNoRelacionados;
  this.CopyLecturaCualitativa.EPEDErroresSemanticos=this.lecturacualitativa.EPEDErroresSemanticos;
  this.CopyLecturaCualitativa.EmparejamientoPalabraEscritaDibujo=this.lecturacualitativa.EmparejamientoPalabraEscritaDibujo;
  this.CopyLecturaCualitativa.LNPLexicalizacionDeNoPalabras=this.lecturacualitativa.LNPLexicalizacionDeNoPalabras;
  this.CopyLecturaCualitativa.LNPNoPalabrasErroneas=this.lecturacualitativa.LNPNoPalabrasErroneas;
  this.CopyLecturaCualitativa.LPParalexiasFormales=this.lecturacualitativa.LPParalexiasFormales;
  this.CopyLecturaCualitativa.LPParalexiasMorfologicas=this.lecturacualitativa.LPParalexiasMorfologicas;
  this.CopyLecturaCualitativa.LPParalexiasSemanticas=this.lecturacualitativa.LPParalexiasSemanticas;
  this.CopyLecturaCualitativa.LPSustitucionPorNoPalabras=this.lecturacualitativa.LPSustitucionPorNoPalabras;
  this.CopyLecturaCualitativa.LecturaDeNoPalabras=this.lecturacualitativa.LecturaDeNoPalabras;
  this.CopyLecturaCualitativa.LecturaDePalabras=this.lecturacualitativa.LecturaDePalabras;
}
clear(){
  if (this.LecturaCualitativa.ComprensionDeComandoEscrito == 0){
    this.LecturaCualitativa.CDCEOmisionDeParte=null;
    this.LecturaCualitativa.CDCEAlteracionDelOrden=null;
    this.LecturaCualitativa.CDCESustitucionDeParte=null
  }
  if(this.LecturaCualitativa.LecturaDeNoPalabras == 0){
    this.LecturaCualitativa.LNPLexicalizacionDeNoPalabras=null;
    this.LecturaCualitativa.LNPNoPalabrasErroneas=null;
  }
  if(this.LecturaCualitativa.LecturaDePalabras == 0){
    this.LecturaCualitativa.LPParalexiasFormales=null;
    this.LecturaCualitativa.LPParalexiasMorfologicas=null;
    this.LecturaCualitativa.LPParalexiasSemanticas=null;
    this.LecturaCualitativa.LPSustitucionPorNoPalabras=null;
  }
  if(this.LecturaCualitativa.EmparejamientoPalabraEscritaDibujo==0){
    this.LecturaCualitativa.EPEDErroresFormales=null;
    this.LecturaCualitativa.EPEDErroresNoRelacionados=null;
    this.LecturaCualitativa.EPEDErroresSemanticos=null;
  }
}
popUpValidation(){
  var CDCE:boolean;
  var EPED:boolean;
  var LP:boolean;
  var LNP:boolean;
  if(this.LecturaCualitativa.ComprensionDeComandoEscrito == null && this.LecturaCualitativa.EmparejamientoPalabraEscritaDibujo==null&&
    this.LecturaCualitativa.LecturaDeNoPalabras == null && this.LecturaCualitativa.LecturaDePalabras == null){
    this.popupsave = true;
  }
  if (this.LecturaCualitativa.ComprensionDeComandoEscrito == 1 &&
    (this.LecturaCualitativa.CDCEAlteracionDelOrden == null || this.LecturaCualitativa.CDCEAlteracionDelOrden == false)&&
    (this.LecturaCualitativa.CDCEOmisionDeParte == null || this.LecturaCualitativa.CDCEOmisionDeParte == false)&&
    (this.LecturaCualitativa.CDCESustitucionDeParte == null || this.LecturaCualitativa.CDCESustitucionDeParte == false)){
    CDCE = false
  } else {
    CDCE = true
  }
  if(this.LecturaCualitativa.EmparejamientoPalabraEscritaDibujo == 1 &&
    (this.LecturaCualitativa.EPEDErroresFormales == null || this.LecturaCualitativa.EPEDErroresFormales == false)&&
    (this.LecturaCualitativa.EPEDErroresNoRelacionados == null || this.LecturaCualitativa.EPEDErroresNoRelacionados == false)&&
    (this.LecturaCualitativa.EPEDErroresSemanticos == null || this.LecturaCualitativa.EPEDErroresSemanticos == false)){
      EPED = false
    }else{
      EPED = true
    }
    if(this.LecturaCualitativa.LecturaDeNoPalabras == 1 &&
      (this.LecturaCualitativa.LNPLexicalizacionDeNoPalabras == null || this.LecturaCualitativa.LNPLexicalizacionDeNoPalabras == false)&&
      (this.LecturaCualitativa.LNPNoPalabrasErroneas == null || this.LecturaCualitativa.LNPNoPalabrasErroneas == false)){
        LNP = false
    }else{
      LNP = true
    }

    if(this.LecturaCualitativa.LecturaDePalabras==1 &&
      (this.LecturaCualitativa.LPParalexiasFormales == null || this.LecturaCualitativa.LPParalexiasFormales == false)&&
      (this.LecturaCualitativa.LPParalexiasMorfologicas == null || this.LecturaCualitativa.LPParalexiasMorfologicas == false)&&
      (this.LecturaCualitativa.LPParalexiasSemanticas == null || this.LecturaCualitativa.LPParalexiasSemanticas == false)&&
      (this.LecturaCualitativa.LPSustitucionPorNoPalabras == null || this.LecturaCualitativa.LPSustitucionPorNoPalabras == false)){
      LP = false
    }else{
      LP = true
    }
    if(LP && LNP && EPED && CDCE){
      this.popupsave=true
    }else{
      this.popupsave=false
    }


  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend(){
    this.LecturaCuantitativa.WasSuspended = true;
  }

  total(){
    this.LecturaCuantitativa.SubTotal=this.LecturaCuantitativa.Arco+
                                      this.LecturaCuantitativa.Bleja+
                                      this.LecturaCuantitativa.Casa+
                                      this.LecturaCuantitativa.Cho+
                                      this.LecturaCuantitativa.Comunidad+
                                      this.LecturaCuantitativa.Estatua+
                                      this.LecturaCuantitativa.Grito+
                                      this.LecturaCuantitativa.Mono+
                                      this.LecturaCuantitativa.Ne+
                                      this.LecturaCuantitativa.SaqueLaMano+
                                      this.LecturaCuantitativa.Tudipro;

  }
  saved(){
    this.CopyLecturaCualitativa.CDCEAlteracionDelOrden=this.LecturaCualitativa.CDCEAlteracionDelOrden;
    this.CopyLecturaCualitativa.CDCEOmisionDeParte=this.LecturaCualitativa.CDCEOmisionDeParte;
    this.CopyLecturaCualitativa.CDCESustitucionDeParte=this.LecturaCualitativa.CDCESustitucionDeParte;
    this.CopyLecturaCualitativa.ComprensionDeComandoEscrito=this.LecturaCualitativa.ComprensionDeComandoEscrito;
    this.CopyLecturaCualitativa.EPEDErroresFormales=this.LecturaCualitativa.EPEDErroresFormales;
    this.CopyLecturaCualitativa.EPEDErroresNoRelacionados=this.LecturaCualitativa.EPEDErroresNoRelacionados;
    this.CopyLecturaCualitativa.EPEDErroresSemanticos=this.LecturaCualitativa.EPEDErroresSemanticos;
    this.CopyLecturaCualitativa.EmparejamientoPalabraEscritaDibujo=this.LecturaCualitativa.EmparejamientoPalabraEscritaDibujo;
    this.CopyLecturaCualitativa.LNPLexicalizacionDeNoPalabras=this.LecturaCualitativa.LNPLexicalizacionDeNoPalabras;
    this.CopyLecturaCualitativa.LNPNoPalabrasErroneas=this.LecturaCualitativa.LNPNoPalabrasErroneas;
    this.CopyLecturaCualitativa.LPParalexiasFormales=this.LecturaCualitativa.LPParalexiasFormales;
    this.CopyLecturaCualitativa.LPParalexiasMorfologicas=this.LecturaCualitativa.LPParalexiasMorfologicas;
    this.CopyLecturaCualitativa.LPParalexiasSemanticas=this.LecturaCualitativa.LPParalexiasSemanticas;
    this.CopyLecturaCualitativa.LPSustitucionPorNoPalabras=this.LecturaCualitativa.LPSustitucionPorNoPalabras;
    this.CopyLecturaCualitativa.LecturaDeNoPalabras=this.LecturaCualitativa.LecturaDeNoPalabras;
    this.CopyLecturaCualitativa.LecturaDePalabras=this.LecturaCualitativa.LecturaDePalabras;

  }
  cancel(){
    this.LecturaCualitativa.CDCEAlteracionDelOrden=this.CopyLecturaCualitativa.CDCEAlteracionDelOrden;
    this.LecturaCualitativa.CDCEOmisionDeParte=this.CopyLecturaCualitativa.CDCEOmisionDeParte;
    this.LecturaCualitativa.CDCESustitucionDeParte=this.CopyLecturaCualitativa.CDCESustitucionDeParte;
    this.LecturaCualitativa.ComprensionDeComandoEscrito=this.CopyLecturaCualitativa.ComprensionDeComandoEscrito;
    this.LecturaCualitativa.EPEDErroresFormales=this.CopyLecturaCualitativa.EPEDErroresFormales;
    this.LecturaCualitativa.EPEDErroresNoRelacionados=this.CopyLecturaCualitativa.EPEDErroresNoRelacionados;
    this.LecturaCualitativa.EPEDErroresSemanticos=this.CopyLecturaCualitativa.EPEDErroresSemanticos;
    this.LecturaCualitativa.EmparejamientoPalabraEscritaDibujo=this.CopyLecturaCualitativa.EmparejamientoPalabraEscritaDibujo;
    this.LecturaCualitativa.LNPLexicalizacionDeNoPalabras=this.CopyLecturaCualitativa.LNPLexicalizacionDeNoPalabras;
    this.LecturaCualitativa.LNPNoPalabrasErroneas=this.CopyLecturaCualitativa.LNPNoPalabrasErroneas;
    this.LecturaCualitativa.LPParalexiasFormales=this.CopyLecturaCualitativa.LPParalexiasFormales;
    this.LecturaCualitativa.LPParalexiasMorfologicas=this.CopyLecturaCualitativa.LPParalexiasMorfologicas;
    this.LecturaCualitativa.LPParalexiasSemanticas=this.CopyLecturaCualitativa.LPParalexiasSemanticas;
    this.LecturaCualitativa.LPSustitucionPorNoPalabras=this.CopyLecturaCualitativa.LPSustitucionPorNoPalabras;
    this.LecturaCualitativa.LecturaDeNoPalabras=this.CopyLecturaCualitativa.LecturaDeNoPalabras;
    this.LecturaCualitativa.LecturaDePalabras=this.CopyLecturaCualitativa.LecturaDePalabras;

  }
cuantitativoFieldValidation():boolean{
  if ((this.LecturaCuantitativa.Arco == null || this.LecturaCuantitativa.Bleja == null ||
    this.LecturaCuantitativa.Casa == null || this.LecturaCuantitativa.Cho == null ||
    this.LecturaCuantitativa.Comunidad == null || this.LecturaCuantitativa.Estatua == null ||
    this.LecturaCuantitativa.Grito == null || this.LecturaCuantitativa.Mono == null ||
    this.LecturaCuantitativa.Ne == null || this.LecturaCuantitativa.SaqueLaMano == null ||
    this.LecturaCuantitativa.Tudipro == null) &&
    this.LecturaCuantitativa.WasSuspended == false
  ) {
    return false;
  }
  if (this.LecturaCuantitativa.WasSuspended == true) {
    return true;
  }
  if (this.LecturaCuantitativa.Arco != null || this.LecturaCuantitativa.Bleja != null ||
    this.LecturaCuantitativa.Casa != null || this.LecturaCuantitativa.Cho != null ||
    this.LecturaCuantitativa.Comunidad != null || this.LecturaCuantitativa.Estatua != null ||
    this.LecturaCuantitativa.Grito != null || this.LecturaCuantitativa.Mono != null ||
    this.LecturaCuantitativa.Ne != null || this.LecturaCuantitativa.SaqueLaMano != null ||
    this.LecturaCuantitativa.Tudipro != null) {
    return true
 }
}
  next() {
    if(this.cuantitativoFieldValidation()){
      this.event.emit(1)
      this.emitCualitativa.emit(this.LecturaCualitativa);
      this.emitCuantitativa.emit(this.LecturaCuantitativa);
    }
  }
  back() {
    this.event.emit(-1)
  }
}
