import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Denominacion_CualitativaDTO } from 'src/app/clases/Denominacion_CualitativaDTO';
import { Denominacion_CuantitativaDTO } from 'src/app/clases/Denominacion_CuantitativaDTO';
import { QuestionStep4 } from 'src/app/clases/QuestionStep4';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-denomination',
  templateUrl: './denomination.component.html',
  styleUrls: ['./denomination.component.css']
})
export class DenominationComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<Denominacion_CualitativaDTO>();
  @Output() emitCuantitativa = new EventEmitter<Denominacion_CuantitativaDTO>();
  @Input() denominacioncuantitativa:Denominacion_CuantitativaDTO;
  @Input() denominacioncualitativa:Denominacion_CualitativaDTO;
DenominacionCuantitativa:Denominacion_CuantitativaDTO=new Denominacion_CuantitativaDTO();
DropdownOptions:QuestionStep4=new QuestionStep4();
DenominacionCualitativa:Denominacion_CualitativaDTO= new Denominacion_CualitativaDTO();
CopyDenominacionCualitativa:Denominacion_CualitativaDTO= new Denominacion_CualitativaDTO();
popupsave:boolean;
  constructor(public _ModalService:NgbModal, config: NgbModalConfig, private _toastr:ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.DenominacionCualitativa=this.denominacioncualitativa;
    this.DenominacionCuantitativa=this.denominacioncuantitativa;
    //this.CopyDenominacionCualitativa=this.denominacioncualitativa;
    this.copycharge();
    this.popUpValidation();
  }
  copycharge(){
    this.CopyDenominacionCualitativa.Articulacion=this.denominacioncualitativa.Articulacion;
    this.CopyDenominacionCualitativa.CodificacionFonologica=this.denominacioncualitativa.CodificacionFonologica;
    this.CopyDenominacionCualitativa.PLAnomia=this.denominacioncualitativa.PLAnomia;
    this.CopyDenominacionCualitativa.PLCircunloquios=this.denominacioncualitativa.PLCircunloquios;
    this.CopyDenominacionCualitativa.PLEstereotipias=this.denominacioncualitativa.PLEstereotipias;
    this.CopyDenominacionCualitativa.PLMuletillas=this.denominacioncualitativa.PLMuletillas;
    this.CopyDenominacionCualitativa.PLNeologismos=this.denominacioncualitativa.PLNeologismos;
    this.CopyDenominacionCualitativa.PLParafasiasFormales=this.denominacioncualitativa.PLParafasiasFormales;
    this.CopyDenominacionCualitativa.PLParafasiasMorfologicas=this.denominacioncualitativa.PLParafasiasMorfologicas;
    this.CopyDenominacionCualitativa.PLParafasiasSemanticas=this.denominacioncualitativa.PLParafasiasSemanticas;
    this.CopyDenominacionCualitativa.PLPerseveraciones=this.denominacioncualitativa.PLPerseveraciones;
    this.CopyDenominacionCualitativa.ProcesamientoLexico=this.denominacioncualitativa.ProcesamientoLexico;
  }
  clear(){
    if (this.DenominacionCualitativa.ProcesamientoLexico == 0) {
      this.DenominacionCualitativa.PLAnomia = null;
      this.DenominacionCualitativa.PLCircunloquios = null;
      this.DenominacionCualitativa.PLEstereotipias = null;
      this.DenominacionCualitativa.PLCircunloquios = null;
      this.DenominacionCualitativa.PLNeologismos = null;
      this.DenominacionCualitativa.PLMuletillas = null;
      this.DenominacionCualitativa.PLParafasiasMorfologicas=null;
      this.DenominacionCualitativa.PLParafasiasSemanticas=null;
      this.DenominacionCualitativa.PLPerseveraciones=null;
    }
  }
  popUpValidation(){
    if(this.DenominacionCualitativa.ProcesamientoLexico == 1){
      this.popupsave = true;
    }
    if (this.DenominacionCualitativa.ProcesamientoLexico == 1 &&
      (this.DenominacionCualitativa.PLAnomia == null || this.DenominacionCualitativa.PLAnomia == false)&&
      (this.DenominacionCualitativa.PLCircunloquios == null || this.DenominacionCualitativa.PLCircunloquios == false)&&
      (this.DenominacionCualitativa.PLEstereotipias == null || this.DenominacionCualitativa.PLEstereotipias == false)&&
      (this.DenominacionCualitativa.PLMuletillas == null || this.DenominacionCualitativa.PLMuletillas == false)&&
      (this.DenominacionCualitativa.PLNeologismos == null || this.DenominacionCualitativa.PLNeologismos == false)&&
      (this.DenominacionCualitativa.PLParafasiasFormales == null || this.DenominacionCualitativa.PLParafasiasFormales == false)&&
      (this.DenominacionCualitativa.PLParafasiasMorfologicas == null || this.DenominacionCualitativa.PLParafasiasMorfologicas == false)&&
      (this.DenominacionCualitativa.PLParafasiasSemanticas == null || this.DenominacionCualitativa.PLParafasiasSemanticas == false)&&
      (this.DenominacionCualitativa.PLPerseveraciones == null || this.DenominacionCualitativa.PLPerseveraciones == false)){
      this.popupsave = false
    } else {
      this.popupsave = true
    }
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
cuantitativoFieldValidation():boolean{
  if ((this.DenominacionCuantitativa.LaminaCama == null || this.DenominacionCuantitativa.LaminaCome == null ||
    this.DenominacionCuantitativa.LaminaRema == null || this.DenominacionCuantitativa.LaminaViolin == null) &&
    this.DenominacionCuantitativa.WasSuspended == false){
      this._toastr.error('Todos los campos cuantitativos son requeridos. Si el usuario no puede finalizar el paso, suspenda el paso actual y continue con el siguiente','Compruebe los campos');
    return false;
  }
  if (this.DenominacionCuantitativa.WasSuspended == true) {
    return true;
  }
  if (this.DenominacionCuantitativa.LaminaCama != null || this.DenominacionCuantitativa.LaminaCome ||
      this.DenominacionCuantitativa.LaminaRema != null || this.DenominacionCuantitativa.LaminaViolin){
    return true
  }
}
  next() {
    if(this.cuantitativoFieldValidation()){
      this.event.emit(1)
      this.emitCualitativa.emit(this.DenominacionCualitativa);
      this.emitCuantitativa.emit(this.DenominacionCuantitativa);
    }

  }
  back() {
    this.event.emit(-1)
  }
}
