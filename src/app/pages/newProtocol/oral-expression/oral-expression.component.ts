import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
@Output() event = new EventEmitter<number>();
DropdownOptions:QuestionsStep2=new QuestionsStep2();
ExpresionOral:ExpresionOral_CuantitativaDTO=new ExpresionOral_CuantitativaDTO();
ExpresionOralCualitativa:ExpresionOral_CualitativaDTO=new ExpresionOral_CualitativaDTO();
CopyExpresionOralCualitativa:ExpresionOral_CualitativaDTO=new ExpresionOral_CualitativaDTO();

  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend(){
    this.ExpresionOral.WasSuspended = true;
  }

  total(){
    this.ExpresionOral.SubTotal=this.ExpresionOral.DigaSuNombre+this.ExpresionOral.EnQueCiudadNacio+this.ExpresionOral.LaminaConsultaMedica+this.ExpresionOral.LaminaElParque;
  }
  saved(){
    this.CopyExpresionOralCualitativa.Articulacion=this.ExpresionOralCualitativa.Articulacion;
    this.CopyExpresionOralCualitativa.CodificacionFonologica=this.ExpresionOralCualitativa.CodificacionFonologica;
    this.CopyExpresionOralCualitativa.Fluencia=this.ExpresionOralCualitativa.Fluencia;
    this.CopyExpresionOralCualitativa.PLAnomias=this.ExpresionOralCualitativa.PLAnomias;
    this.CopyExpresionOralCualitativa.PLEstereotipias=this.ExpresionOralCualitativa.PLEstereotipias;
    this.CopyExpresionOralCualitativa.PLMuletillas=this.ExpresionOralCualitativa.PLMuletillas;
    this.CopyExpresionOralCualitativa.PLNeologismo=this.ExpresionOralCualitativa.PLNeologismo;
    this.CopyExpresionOralCualitativa.PLParafasias=this.ExpresionOralCualitativa.PLParafasias;
    this.CopyExpresionOralCualitativa.PLPerseveraciones=this.ExpresionOralCualitativa.PLPerseveraciones;
    this.CopyExpresionOralCualitativa.ProcesamientoLexicoAlterado=this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado;
    this.CopyExpresionOralCualitativa.ProcesamientoSintaxtico=this.ExpresionOralCualitativa.ProcesamientoSintaxtico;
    this.CopyExpresionOralCualitativa.Prosodia=this.ExpresionOralCualitativa.Prosodia;

  }
  cancel(){
    this.ExpresionOralCualitativa.Articulacion= this.CopyExpresionOralCualitativa.Articulacion;
    this.ExpresionOralCualitativa.CodificacionFonologica= this.CopyExpresionOralCualitativa.CodificacionFonologica;
    this.ExpresionOralCualitativa.Fluencia= this.CopyExpresionOralCualitativa.Fluencia;
    this.ExpresionOralCualitativa.PLAnomias= this.CopyExpresionOralCualitativa.PLAnomias;
    this.ExpresionOralCualitativa.PLEstereotipias= this.CopyExpresionOralCualitativa.PLEstereotipias;
    this.ExpresionOralCualitativa.PLMuletillas= this.CopyExpresionOralCualitativa.PLMuletillas;
    this.ExpresionOralCualitativa.PLNeologismo= this.CopyExpresionOralCualitativa.PLNeologismo;
    this.ExpresionOralCualitativa.PLParafasias= this.CopyExpresionOralCualitativa.PLParafasias;
    this.ExpresionOralCualitativa.PLPerseveraciones= this.CopyExpresionOralCualitativa.PLPerseveraciones;
    this.ExpresionOralCualitativa.ProcesamientoLexicoAlterado= this.CopyExpresionOralCualitativa.ProcesamientoLexicoAlterado;
    this.ExpresionOralCualitativa.ProcesamientoSintaxtico= this.CopyExpresionOralCualitativa.ProcesamientoSintaxtico;
    this.ExpresionOralCualitativa.Prosodia= this.CopyExpresionOralCualitativa.Prosodia;

  }

  next() {
    this.event.emit(1)
  }
  back() {
    this.event.emit(-1)
  }
}
