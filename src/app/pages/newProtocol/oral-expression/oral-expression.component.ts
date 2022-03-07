import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ExpresionOral_CualitativaDTO } from 'src/app/clases/ExpresionOral_CualitativaDTO';
import { ExpresionOral_CuantitativaDTO } from 'src/app/clases/ExpresionOral_CuantitativaDTO';
import { QuestionsStep2 } from 'src/app/clases/QuestionsStep2';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oral-expression',
  templateUrl: './oral-expression.component.html',
  styleUrls: ['./oral-expression.component.css']
})
export class OralExpressionComponent implements OnInit {
  @Input() oralcuantitativa: ExpresionOral_CuantitativaDTO;
  @Input() oralcualitativa: ExpresionOral_CualitativaDTO;
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<ExpresionOral_CualitativaDTO>();
  @Output() emitCuantitativa = new EventEmitter<ExpresionOral_CuantitativaDTO>();
  DropdownOptions: QuestionsStep2 = new QuestionsStep2();
  ExpresionOral: ExpresionOral_CuantitativaDTO = new ExpresionOral_CuantitativaDTO();
  ExpresionOralCualitativa: ExpresionOral_CualitativaDTO = new ExpresionOral_CualitativaDTO();
  CopyExpresionOralCualitativa: ExpresionOral_CualitativaDTO = new ExpresionOral_CualitativaDTO();
  popupsave: boolean;
  constructor(public _ModalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit(): void {
    this.ExpresionOral = this.oralcuantitativa;
    this.ExpresionOralCualitativa = this.oralcualitativa;
    //this.CopyExpresionOralCualitativa=this.oralcualitativa;
    this.copycharge();
    this.popUpValidation();
  }
  copycharge() {
    this.CopyExpresionOralCualitativa.Articulacion = this.oralcualitativa.Articulacion;
    this.CopyExpresionOralCualitativa.CodificacionFonologica = this.oralcualitativa.CodificacionFonologica;
    this.CopyExpresionOralCualitativa.Fluencia = this.oralcualitativa.Fluencia;
    this.CopyExpresionOralCualitativa.PLAnomias = this.oralcualitativa.PLAnomias;
    this.CopyExpresionOralCualitativa.PLEstereotipias = this.oralcualitativa.PLEstereotipias;
    this.CopyExpresionOralCualitativa.PLMuletillas = this.oralcualitativa.PLMuletillas;
    this.CopyExpresionOralCualitativa.PLNeologismo = this.oralcualitativa.PLNeologismo;
    this.CopyExpresionOralCualitativa.PLParafasias = this.oralcualitativa.PLParafasias;
    this.CopyExpresionOralCualitativa.PLPerseveraciones = this.oralcualitativa.PLPerseveraciones;
    this.CopyExpresionOralCualitativa.ProcesamientoLexicoAlterado = this.oralcualitativa.ProcesamientoLexicoAlterado;
    this.CopyExpresionOralCualitativa.ProcesamientoSintaxtico = this.oralcualitativa.ProcesamientoSintaxtico;
    this.CopyExpresionOralCualitativa.Prosodia = this.oralcualitativa.Prosodia;
  }
  clear() {
    if (this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado == 0) {
      this.ExpresionOralCualitativa.PLAnomias = null;
      this.ExpresionOralCualitativa.PLEstereotipias = null;
      this.ExpresionOralCualitativa.PLMuletillas = null;
      this.ExpresionOralCualitativa.PLNeologismo = null;
      this.ExpresionOralCualitativa.PLParafasias = null;
      this.ExpresionOralCualitativa.PLPerseveraciones = null;
    }
  }
  popUpValidation() {
    if (this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado == null) {
      this.popupsave = true;
      return
    }
    if (this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado == 1 &&
      (this.ExpresionOralCualitativa.PLAnomias == null || this.ExpresionOralCualitativa.PLAnomias == false) &&
      (this.ExpresionOralCualitativa.PLEstereotipias == null || this.ExpresionOralCualitativa.PLEstereotipias == false) &&
      (this.ExpresionOralCualitativa.PLMuletillas == null || this.ExpresionOralCualitativa.PLMuletillas == false) &&
      (this.ExpresionOralCualitativa.PLNeologismo == null || this.ExpresionOralCualitativa.PLNeologismo == false) &&
      (this.ExpresionOralCualitativa.PLParafasias == null || this.ExpresionOralCualitativa.PLParafasias == false) &&
      (this.ExpresionOralCualitativa.PLPerseveraciones == null || this.ExpresionOralCualitativa.PLPerseveraciones == false)
    ) {
      this.popupsave = false
      return
    } else {
      this.popupsave = true;
    }
  }
  open(register) {
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend() {
    this.ExpresionOral.WasSuspended = true;
  }

  total() {
    this.ExpresionOral.SubTotal = this.ExpresionOral.DigaSuNombre + this.ExpresionOral.EnQueCiudadNacio + this.ExpresionOral.LaminaConsultaMedica + this.ExpresionOral.LaminaElParque;
  }
  saved() {
    this.CopyExpresionOralCualitativa.Articulacion = this.ExpresionOralCualitativa.Articulacion;
    this.CopyExpresionOralCualitativa.CodificacionFonologica = this.ExpresionOralCualitativa.CodificacionFonologica;
    this.CopyExpresionOralCualitativa.Fluencia = this.ExpresionOralCualitativa.Fluencia;
    this.CopyExpresionOralCualitativa.PLAnomias = this.ExpresionOralCualitativa.PLAnomias;
    this.CopyExpresionOralCualitativa.PLEstereotipias = this.ExpresionOralCualitativa.PLEstereotipias;
    this.CopyExpresionOralCualitativa.PLMuletillas = this.ExpresionOralCualitativa.PLMuletillas;
    this.CopyExpresionOralCualitativa.PLNeologismo = this.ExpresionOralCualitativa.PLNeologismo;
    this.CopyExpresionOralCualitativa.PLParafasias = this.ExpresionOralCualitativa.PLParafasias;
    this.CopyExpresionOralCualitativa.PLPerseveraciones = this.ExpresionOralCualitativa.PLPerseveraciones;
    this.CopyExpresionOralCualitativa.ProcesamientoLexicoAlterado = this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado;
    this.CopyExpresionOralCualitativa.ProcesamientoSintaxtico = this.ExpresionOralCualitativa.ProcesamientoSintaxtico;
    this.CopyExpresionOralCualitativa.Prosodia = this.ExpresionOralCualitativa.Prosodia;

  }
  cancel() {
    this.ExpresionOralCualitativa.Articulacion = this.CopyExpresionOralCualitativa.Articulacion;
    this.ExpresionOralCualitativa.CodificacionFonologica = this.CopyExpresionOralCualitativa.CodificacionFonologica;
    this.ExpresionOralCualitativa.Fluencia = this.CopyExpresionOralCualitativa.Fluencia;
    this.ExpresionOralCualitativa.PLAnomias = this.CopyExpresionOralCualitativa.PLAnomias;
    this.ExpresionOralCualitativa.PLEstereotipias = this.CopyExpresionOralCualitativa.PLEstereotipias;
    this.ExpresionOralCualitativa.PLMuletillas = this.CopyExpresionOralCualitativa.PLMuletillas;
    this.ExpresionOralCualitativa.PLNeologismo = this.CopyExpresionOralCualitativa.PLNeologismo;
    this.ExpresionOralCualitativa.PLParafasias = this.CopyExpresionOralCualitativa.PLParafasias;
    this.ExpresionOralCualitativa.PLPerseveraciones = this.CopyExpresionOralCualitativa.PLPerseveraciones;
    this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado = this.CopyExpresionOralCualitativa.ProcesamientoLexicoAlterado;
    this.ExpresionOralCualitativa.ProcesamientoSintaxtico = this.CopyExpresionOralCualitativa.ProcesamientoSintaxtico;
    this.ExpresionOralCualitativa.Prosodia = this.CopyExpresionOralCualitativa.Prosodia;

  }
  cuantitativoFieldValidation(): boolean {
    if ((this.ExpresionOral.DigaSuNombre == null || this.ExpresionOral.EnQueCiudadNacio == null ||
      this.ExpresionOral.LaminaConsultaMedica == null || this.ExpresionOral.LaminaElParque == null) &&
      this.ExpresionOral.WasSuspended == false
    ) {
      return false;
    }
    if (this.ExpresionOral.WasSuspended == true) {
      return true;
    }
    if (this.ExpresionOral.DigaSuNombre != null || this.ExpresionOral.EnQueCiudadNacio != null ||
      this.ExpresionOral.LaminaConsultaMedica != null || this.ExpresionOral.LaminaElParque != null) {
      return true
    }
  }
  next() {
    if (this.cuantitativoFieldValidation()) {
      this.event.emit(1)
      this.emitCualitativa.emit(this.ExpresionOralCualitativa);
      this.emitCuantitativa.emit(this.ExpresionOral);
    }
  }
  back() {
    this.event.emit(-1)
  }
}
