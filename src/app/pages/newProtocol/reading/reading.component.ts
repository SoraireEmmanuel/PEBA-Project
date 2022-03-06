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
  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.LecturaCualitativa=this.lecturacualitativa;
    this.LecturaCuantitativa=this.lecturacuantitativa
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

  next() {
    this.event.emit(1)
    this.emitCualitativa.emit(this.LecturaCualitativa);
    this.emitCuantitativa.emit(this.LecturaCuantitativa);
  }
  back() {
    this.event.emit(-1)
  }
}
