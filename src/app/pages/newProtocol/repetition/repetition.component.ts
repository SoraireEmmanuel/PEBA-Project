import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuestionsStep3 } from 'src/app/clases/QuestionsStep3';
import { Repeticion_CuantitativaDTO } from 'src/app/clases/Repeticion_CuantitativaDTO';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Repeticion_CualitativaDTO } from 'src/app/clases/Repeticion_CualitativaDTO';

@Component({
  selector: 'app-repetition',
  templateUrl: './repetition.component.html',
  styleUrls: ['./repetition.component.css']
})
export class RepetitionComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<Repeticion_CualitativaDTO>();
  @Output()emitCuantitativa = new EventEmitter<Repeticion_CuantitativaDTO>();
  @Input() repeticioncuantitativa: Repeticion_CuantitativaDTO;
  @Input() repeticioncualitativa: Repeticion_CualitativaDTO;
  DropdownOptions:QuestionsStep3=new QuestionsStep3();
  RepeticionCuantitativa:Repeticion_CuantitativaDTO=new Repeticion_CuantitativaDTO();
  RepeticionCualitativa:Repeticion_CualitativaDTO=new Repeticion_CualitativaDTO();
  CopyRepeticionCualitativa:Repeticion_CualitativaDTO=new Repeticion_CualitativaDTO();
  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.RepeticionCualitativa=this.repeticioncualitativa;
    this.RepeticionCuantitativa=this.repeticioncuantitativa;
    this.CopyRepeticionCualitativa=this.repeticioncualitativa;
  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend(){
    this.RepeticionCuantitativa.WasSuspended = true;
  }

  total(){
    this.RepeticionCuantitativa.SubTotal=this.RepeticionCuantitativa.Almusipa+
                                          this.RepeticionCuantitativa.ElHombreGuardo+
                                          this.RepeticionCuantitativa.Fo+
                                          this.RepeticionCuantitativa.LaMujerRegalo+
                                          this.RepeticionCuantitativa.MuchoRuido+
                                          this.RepeticionCuantitativa.Pensamiento+
                                          this.RepeticionCuantitativa.Precio+
                                          this.RepeticionCuantitativa.Sol+
                                          this.RepeticionCuantitativa.Treyo;
  }
  saved(){
    this.CopyRepeticionCualitativa.Articulacion=this.RepeticionCualitativa.Articulacion
    this.CopyRepeticionCualitativa.CFFonemicos=this.RepeticionCualitativa.CFFonemicos
    this.CopyRepeticionCualitativa.CFLexicalizacionDeNoPalabras=this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras
    this.CopyRepeticionCualitativa.CodificacionFonologica=this.RepeticionCualitativa.CodificacionFonologica
    this.CopyRepeticionCualitativa.PLEstereotipias=this.RepeticionCualitativa.PLEstereotipias
    this.CopyRepeticionCualitativa.PLNeologismos=this.RepeticionCualitativa.PLNeologismos
    this.CopyRepeticionCualitativa.PLParafasiasFormales=this.RepeticionCualitativa.PLParafasiasFormales
    this.CopyRepeticionCualitativa.PLParafasiasMorfologicas=this.RepeticionCualitativa.PLParafasiasMorfologicas
    this.CopyRepeticionCualitativa.PLParafasiasSemanticas=this.RepeticionCualitativa.PLParafasiasSemanticas
    this.CopyRepeticionCualitativa.PLPerseveraciones=this.RepeticionCualitativa.PLPerseveraciones
    this.CopyRepeticionCualitativa.ProcesamientoLexico=this.RepeticionCualitativa.ProcesamientoLexico
    this.CopyRepeticionCualitativa.ProcesamientoSintaxtico=this.RepeticionCualitativa.ProcesamientoSintaxtico
  }
  cancel(){
    this.RepeticionCualitativa.Articulacion=this.CopyRepeticionCualitativa.Articulacion;
    this.RepeticionCualitativa.CFFonemicos=this.CopyRepeticionCualitativa.CFFonemicos;
    this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras=this.CopyRepeticionCualitativa.CFLexicalizacionDeNoPalabras;
    this.RepeticionCualitativa.CodificacionFonologica=this.CopyRepeticionCualitativa.CodificacionFonologica;
    this.RepeticionCualitativa.PLEstereotipias=this.CopyRepeticionCualitativa.PLEstereotipias;
    this.RepeticionCualitativa.PLNeologismos=this.CopyRepeticionCualitativa.PLNeologismos;
    this.RepeticionCualitativa.PLParafasiasFormales=this.CopyRepeticionCualitativa.PLParafasiasFormales;
    this.RepeticionCualitativa.PLParafasiasMorfologicas=this.CopyRepeticionCualitativa.PLParafasiasMorfologicas;
    this.RepeticionCualitativa.PLParafasiasSemanticas=this.CopyRepeticionCualitativa.PLParafasiasSemanticas;
    this.RepeticionCualitativa.PLPerseveraciones=this.CopyRepeticionCualitativa.PLPerseveraciones;
    this.RepeticionCualitativa.ProcesamientoLexico=this.CopyRepeticionCualitativa.ProcesamientoLexico;
    this.RepeticionCualitativa.ProcesamientoSintaxtico=this.CopyRepeticionCualitativa.ProcesamientoSintaxtico;

  }

next() {
  this.event.emit(1)
  this.emitCualitativa.emit(this.RepeticionCualitativa)
  this.emitCuantitativa.emit(this.repeticioncuantitativa)
}
back() {
  this.event.emit(-1)
}
}
