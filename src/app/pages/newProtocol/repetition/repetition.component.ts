import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuestionsStep3 } from 'src/app/clases/QuestionsStep3';
import { Repeticion_CuantitativaDTO } from 'src/app/clases/Repeticion_CuantitativaDTO';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Repeticion_CualitativaDTO } from 'src/app/clases/Repeticion_CualitativaDTO';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-repetition',
  templateUrl: './repetition.component.html',
  styleUrls: ['./repetition.component.css']
})
export class RepetitionComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<Repeticion_CualitativaDTO>();
  @Output() emitCuantitativa = new EventEmitter<Repeticion_CuantitativaDTO>();
  @Input() repeticioncuantitativa: Repeticion_CuantitativaDTO;
  @Input() repeticioncualitativa: Repeticion_CualitativaDTO;
  DropdownOptions: QuestionsStep3 = new QuestionsStep3();
  RepeticionCuantitativa: Repeticion_CuantitativaDTO = new Repeticion_CuantitativaDTO();
  RepeticionCualitativa: Repeticion_CualitativaDTO = new Repeticion_CualitativaDTO();
  CopyRepeticionCualitativa: Repeticion_CualitativaDTO = new Repeticion_CualitativaDTO();
  popupsave: boolean;
  constructor(public _ModalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.RepeticionCualitativa = this.repeticioncualitativa;
    this.RepeticionCuantitativa = this.repeticioncuantitativa;
    //this.CopyRepeticionCualitativa=this.repeticioncualitativa;
    this.copycharge();
    this.popUpValidation();
  }
  copycharge() {
    this.CopyRepeticionCualitativa.Articulacion = this.repeticioncualitativa.Articulacion
    this.CopyRepeticionCualitativa.CFFonemicos = this.repeticioncualitativa.CFFonemicos
    this.CopyRepeticionCualitativa.CFLexicalizacionDeNoPalabras = this.repeticioncualitativa.CFLexicalizacionDeNoPalabras
    this.CopyRepeticionCualitativa.CodificacionFonologica = this.repeticioncualitativa.CodificacionFonologica
    this.CopyRepeticionCualitativa.PLEstereotipias = this.repeticioncualitativa.PLEstereotipias
    this.CopyRepeticionCualitativa.PLNeologismos = this.repeticioncualitativa.PLNeologismos
    this.CopyRepeticionCualitativa.PLParafasiasFormales = this.repeticioncualitativa.PLParafasiasFormales
    this.CopyRepeticionCualitativa.PLParafasiasMorfologicas = this.repeticioncualitativa.PLParafasiasMorfologicas
    this.CopyRepeticionCualitativa.PLParafasiasSemanticas = this.repeticioncualitativa.PLParafasiasSemanticas
    this.CopyRepeticionCualitativa.PLPerseveraciones = this.repeticioncualitativa.PLPerseveraciones
    this.CopyRepeticionCualitativa.ProcesamientoLexico = this.repeticioncualitativa.ProcesamientoLexico
    this.CopyRepeticionCualitativa.ProcesamientoSintaxtico = this.repeticioncualitativa.ProcesamientoSintaxtico
  }
  clear() {
    if (this.RepeticionCualitativa.CodificacionFonologica == 0) {
      this.RepeticionCualitativa.CFFonemicos = null;
      this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras = null;
    }
    if (this.RepeticionCualitativa.ProcesamientoLexico == 0) {
      this.RepeticionCualitativa.PLEstereotipias = null;
      this.RepeticionCualitativa.PLNeologismos = null;
      this.RepeticionCualitativa.PLParafasiasFormales = null;
      this.RepeticionCualitativa.PLParafasiasMorfologicas = null;
      this.RepeticionCualitativa.PLParafasiasSemanticas = null;
      this.RepeticionCualitativa.PLPerseveraciones = null;
    }
  }
  popUpValidation() {
    var CF: boolean;
    var PL: boolean;
    if (this.RepeticionCualitativa.CodificacionFonologica == null && this.RepeticionCualitativa.ProcesamientoLexico == null) {
      this.popupsave = true;
      return
    }
    if (this.RepeticionCualitativa.CodificacionFonologica == 1 &&
      (this.RepeticionCualitativa.CFFonemicos == null || this.RepeticionCualitativa.CFFonemicos == false) &&
      (this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras == null || this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras == false)) {
      CF = false
    } else {
      CF = true;
    }
    if (this.RepeticionCualitativa.ProcesamientoLexico == 1 &&
      (this.RepeticionCualitativa.PLEstereotipias == null || this.RepeticionCualitativa.PLEstereotipias == false) &&
      (this.RepeticionCualitativa.PLNeologismos == null || this.RepeticionCualitativa.PLNeologismos == false) &&
      (this.RepeticionCualitativa.PLParafasiasFormales == null || this.RepeticionCualitativa.PLParafasiasFormales == false) &&
      (this.RepeticionCualitativa.PLParafasiasMorfologicas == null || this.RepeticionCualitativa.PLParafasiasMorfologicas == false) &&
      (this.RepeticionCualitativa.PLParafasiasSemanticas == null || this.RepeticionCualitativa.PLParafasiasSemanticas == false) &&
      (this.RepeticionCualitativa.PLPerseveraciones == null || this.RepeticionCualitativa.PLPerseveraciones == false)) {
      PL = false;
    } else {
      PL = true
    }
    if (PL && CF) {
      this.popupsave = true
    } else {
      this.popupsave = false
    }
  }
  open(register) {
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend() {
    this.RepeticionCuantitativa.WasSuspended = true;
  }

  total() {
    this.RepeticionCuantitativa.SubTotal = this.RepeticionCuantitativa.Almusipa +
      this.RepeticionCuantitativa.ElHombreGuardo +
      this.RepeticionCuantitativa.Fo +
      this.RepeticionCuantitativa.LaMujerRegalo +
      this.RepeticionCuantitativa.MuchoRuido +
      this.RepeticionCuantitativa.Pensamiento +
      this.RepeticionCuantitativa.Precio +
      this.RepeticionCuantitativa.Sol +
      this.RepeticionCuantitativa.Treyo;
  }
  saved() {
    this.CopyRepeticionCualitativa.Articulacion = this.RepeticionCualitativa.Articulacion
    this.CopyRepeticionCualitativa.CFFonemicos = this.RepeticionCualitativa.CFFonemicos
    this.CopyRepeticionCualitativa.CFLexicalizacionDeNoPalabras = this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras
    this.CopyRepeticionCualitativa.CodificacionFonologica = this.RepeticionCualitativa.CodificacionFonologica
    this.CopyRepeticionCualitativa.PLEstereotipias = this.RepeticionCualitativa.PLEstereotipias
    this.CopyRepeticionCualitativa.PLNeologismos = this.RepeticionCualitativa.PLNeologismos
    this.CopyRepeticionCualitativa.PLParafasiasFormales = this.RepeticionCualitativa.PLParafasiasFormales
    this.CopyRepeticionCualitativa.PLParafasiasMorfologicas = this.RepeticionCualitativa.PLParafasiasMorfologicas
    this.CopyRepeticionCualitativa.PLParafasiasSemanticas = this.RepeticionCualitativa.PLParafasiasSemanticas
    this.CopyRepeticionCualitativa.PLPerseveraciones = this.RepeticionCualitativa.PLPerseveraciones
    this.CopyRepeticionCualitativa.ProcesamientoLexico = this.RepeticionCualitativa.ProcesamientoLexico
    this.CopyRepeticionCualitativa.ProcesamientoSintaxtico = this.RepeticionCualitativa.ProcesamientoSintaxtico
  }
  cancel() {
    this.RepeticionCualitativa.Articulacion = this.CopyRepeticionCualitativa.Articulacion;
    this.RepeticionCualitativa.CFFonemicos = this.CopyRepeticionCualitativa.CFFonemicos;
    this.RepeticionCualitativa.CFLexicalizacionDeNoPalabras = this.CopyRepeticionCualitativa.CFLexicalizacionDeNoPalabras;
    this.RepeticionCualitativa.CodificacionFonologica = this.CopyRepeticionCualitativa.CodificacionFonologica;
    this.RepeticionCualitativa.PLEstereotipias = this.CopyRepeticionCualitativa.PLEstereotipias;
    this.RepeticionCualitativa.PLNeologismos = this.CopyRepeticionCualitativa.PLNeologismos;
    this.RepeticionCualitativa.PLParafasiasFormales = this.CopyRepeticionCualitativa.PLParafasiasFormales;
    this.RepeticionCualitativa.PLParafasiasMorfologicas = this.CopyRepeticionCualitativa.PLParafasiasMorfologicas;
    this.RepeticionCualitativa.PLParafasiasSemanticas = this.CopyRepeticionCualitativa.PLParafasiasSemanticas;
    this.RepeticionCualitativa.PLPerseveraciones = this.CopyRepeticionCualitativa.PLPerseveraciones;
    this.RepeticionCualitativa.ProcesamientoLexico = this.CopyRepeticionCualitativa.ProcesamientoLexico;
    this.RepeticionCualitativa.ProcesamientoSintaxtico = this.CopyRepeticionCualitativa.ProcesamientoSintaxtico;

  }
  cuantitativoFieldValidation(): boolean {
    if ((this.RepeticionCuantitativa.Almusipa == null || this.RepeticionCuantitativa.ElHombreGuardo == null ||
      this.RepeticionCuantitativa.Fo == null || this.RepeticionCuantitativa.LaMujerRegalo == null ||
      this.RepeticionCuantitativa.MuchoRuido == null || this.RepeticionCuantitativa.Pensamiento == null ||
      this.RepeticionCuantitativa.Precio == null || this.RepeticionCuantitativa.Sol == null ||
      this.RepeticionCuantitativa.Treyo == null) &&
      this.RepeticionCuantitativa.WasSuspended == false
    ) {
      return false;
    }
    if (this.RepeticionCuantitativa.WasSuspended == true) {
      return true;
    }
    if (this.RepeticionCuantitativa.Almusipa != null || this.RepeticionCuantitativa.ElHombreGuardo != null ||
      this.RepeticionCuantitativa.Fo != null || this.RepeticionCuantitativa.LaMujerRegalo != null ||
      this.RepeticionCuantitativa.MuchoRuido != null || this.RepeticionCuantitativa.Pensamiento != null ||
      this.RepeticionCuantitativa.Precio != null || this.RepeticionCuantitativa.Sol != null ||
      this.RepeticionCuantitativa.Treyo != null) {
      return true
    }
  }
  next() {
    if (this.cuantitativoFieldValidation()) {
      this.event.emit(1)
      this.emitCualitativa.emit(this.RepeticionCualitativa)
      this.emitCuantitativa.emit(this.repeticioncuantitativa)
    }
  }
  back() {
    this.event.emit(-1)
  }
}
