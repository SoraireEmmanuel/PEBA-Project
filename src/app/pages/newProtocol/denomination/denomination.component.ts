import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Denominacion_CualitativaDTO } from 'src/app/clases/Denominacion_CualitativaDTO';
import { Denominacion_CuantitativaDTO } from 'src/app/clases/Denominacion_CuantitativaDTO';
import { QuestionStep4 } from 'src/app/clases/QuestionStep4';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-denomination',
  templateUrl: './denomination.component.html',
  styleUrls: ['./denomination.component.css']
})
export class DenominationComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
DenominacionCuantitativa:Denominacion_CuantitativaDTO=new Denominacion_CuantitativaDTO();
DropdownOptions:QuestionStep4=new QuestionStep4();
DenominacionCualitativa:Denominacion_CualitativaDTO= new Denominacion_CualitativaDTO();
CopyDenominacionCualitativa:Denominacion_CualitativaDTO= new Denominacion_CualitativaDTO();
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
    this.DenominacionCuantitativa.WasSuspended = true;
  }

  total(){
    this.DenominacionCuantitativa.SubTotal=this.DenominacionCuantitativa.LaminaCama+
                                            this.DenominacionCuantitativa.LaminaCome+
                                            this.DenominacionCuantitativa.LaminaRema+
                                            this.DenominacionCuantitativa.LaminaViolin;
  }
  saved(){
    this.CopyDenominacionCualitativa.Articulacion=this.DenominacionCualitativa.Articulacion;
    this.CopyDenominacionCualitativa.CodificacionFonologica=this.DenominacionCualitativa.CodificacionFonologica;
    this.CopyDenominacionCualitativa.PLAnomia=this.DenominacionCualitativa.PLAnomia;
    this.CopyDenominacionCualitativa.PLCircunloquios=this.DenominacionCualitativa.PLCircunloquios;
    this.CopyDenominacionCualitativa.PLEstereotipias=this.DenominacionCualitativa.PLEstereotipias;
    this.CopyDenominacionCualitativa.PLMuletillas=this.DenominacionCualitativa.PLMuletillas;
    this.CopyDenominacionCualitativa.PLNeologismos=this.DenominacionCualitativa.PLNeologismos;
    this.CopyDenominacionCualitativa.PLParafasiasFormales=this.DenominacionCualitativa.PLParafasiasFormales;
    this.CopyDenominacionCualitativa.PLParafasiasMorfologicas=this.DenominacionCualitativa.PLParafasiasMorfologicas;
    this.CopyDenominacionCualitativa.PLParafasiasSemanticas=this.DenominacionCualitativa.PLParafasiasSemanticas;
    this.CopyDenominacionCualitativa.PLPerseveraciones=this.DenominacionCualitativa.PLPerseveraciones;
    this.CopyDenominacionCualitativa.ProcesamientoLexico=this.DenominacionCualitativa.ProcesamientoLexico;


  }
  cancel(){
    this.DenominacionCualitativa.Articulacion=this.CopyDenominacionCualitativa.Articulacion;
    this.DenominacionCualitativa.CodificacionFonologica=this.CopyDenominacionCualitativa.CodificacionFonologica;
    this.DenominacionCualitativa.PLAnomia=this.CopyDenominacionCualitativa.PLAnomia;
    this.DenominacionCualitativa.PLCircunloquios=this.CopyDenominacionCualitativa.PLCircunloquios;
    this.DenominacionCualitativa.PLEstereotipias=this.CopyDenominacionCualitativa.PLEstereotipias;
    this.DenominacionCualitativa.PLMuletillas=this.CopyDenominacionCualitativa.PLMuletillas;
    this.DenominacionCualitativa.PLNeologismos=this.CopyDenominacionCualitativa.PLNeologismos;
    this.DenominacionCualitativa.PLParafasiasFormales=this.CopyDenominacionCualitativa.PLParafasiasFormales;
    this.DenominacionCualitativa.PLParafasiasMorfologicas=this.CopyDenominacionCualitativa.PLParafasiasMorfologicas;
    this.DenominacionCualitativa.PLParafasiasSemanticas=this.CopyDenominacionCualitativa.PLParafasiasSemanticas;
    this.DenominacionCualitativa.PLPerseveraciones=this.CopyDenominacionCualitativa.PLPerseveraciones;
    this.DenominacionCualitativa.ProcesamientoLexico=this.CopyDenominacionCualitativa.ProcesamientoLexico;
  }

  next() {
    this.event.emit(1)
  }
  back() {
    this.event.emit(-1)
  }
}
