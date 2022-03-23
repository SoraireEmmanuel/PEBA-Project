import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Escritura_CualitativaDTO } from 'src/app/clases/Escritura_CualitativaDTO';
import { Escritura_CuantitativaDTO } from 'src/app/clases/Escritura_CuantitativaDTO';
import { QuestionStep6 } from 'src/app/clases/QuestionStep6';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output () emitCualitativa = new EventEmitter<Escritura_CualitativaDTO>();
  @Output () emitCuantitativa = new EventEmitter<Escritura_CuantitativaDTO>();
  @Input () escrituracuantitativa:Escritura_CuantitativaDTO;
  @Input () escrituracualitativa:Escritura_CualitativaDTO;
DropdownOptions:QuestionStep6= new QuestionStep6();
EscrituraCuantitativa:Escritura_CuantitativaDTO=new Escritura_CuantitativaDTO();
EscruturaCualitativa:Escritura_CualitativaDTO=new Escritura_CualitativaDTO();
CopyEscruturaCualitativa:Escritura_CualitativaDTO=new Escritura_CualitativaDTO();
popupsave:boolean;
  constructor(public _ModalService:NgbModal, config: NgbModalConfig, private _toastr:ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.EscrituraCuantitativa=this.escrituracuantitativa;
    this.EscruturaCualitativa= this.escrituracualitativa;
    //this.CopyEscruturaCualitativa=this.escrituracualitativa;
    this.copycharge();
    this.popUpValidation();
  }
  copycharge(){
    this.CopyEscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=this.escrituracualitativa.DAdicionDeLetrasQueResultanEnNoPalabra;
    this.CopyEscruturaCualitativa.DOmision=this.escrituracualitativa.DOmision;
    this.CopyEscruturaCualitativa.DSustitucion=this.escrituracualitativa.DSustitucion;
    this.CopyEscruturaCualitativa.Deletreo=this.escrituracualitativa.Deletreo;
    this.CopyEscruturaCualitativa.Grafismo=this.escrituracualitativa.Grafismo;
    this.CopyEscruturaCualitativa.MMDParesiaDeLaManoDominante=this.escrituracualitativa.MMDParesiaDeLaManoDominante;
    this.CopyEscruturaCualitativa.MMDPlejia=this.escrituracualitativa.MMDPlejia;
    this.CopyEscruturaCualitativa.ManoNoDominante=this.escrituracualitativa.ManoNoDominante;
    this.CopyEscruturaCualitativa.MovilidadDeLaManoDominante=this.escrituracualitativa.MovilidadDeLaManoDominante;
    this.CopyEscruturaCualitativa.OErroresFonologicamentePlausibles=this.escrituracualitativa.OErroresFonologicamentePlausibles;
    this.CopyEscruturaCualitativa.OLexicalizacionDeNoPalabras=this.escrituracualitativa.OLexicalizacionDeNoPalabras;
    this.CopyEscruturaCualitativa.OParagrafiasFormales=this.escrituracualitativa.OParagrafiasFormales;
    this.CopyEscruturaCualitativa.OParagrafiasMorfologicas=this.escrituracualitativa.OParagrafiasMorfologicas;
    this.CopyEscruturaCualitativa.OParagrafiasSemanticas=this.escrituracualitativa.OParagrafiasSemanticas;
    this.CopyEscruturaCualitativa.Ortografia=this.escrituracualitativa.Ortografia;
  }
  clear(){
    if(this.EscruturaCualitativa.MovilidadDeLaManoDominante ==0){
      this.EscruturaCualitativa.MMDPlejia=null;
      this.EscruturaCualitativa.MMDParesiaDeLaManoDominante=null;
    }
    if(this.EscruturaCualitativa.Deletreo== 0){
      this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=null;
      this.EscruturaCualitativa.DOmision =null;
      this.EscruturaCualitativa.DSustitucion =null;
    }
    if(this.EscruturaCualitativa.Ortografia==0){
      this.EscruturaCualitativa.OErroresFonologicamentePlausibles = null;
      this.EscruturaCualitativa.OLexicalizacionDeNoPalabras = null;
      this.EscruturaCualitativa.OParagrafiasFormales = null;
      this.EscruturaCualitativa.OParagrafiasMorfologicas = null;
      this.EscruturaCualitativa.OParagrafiasSemanticas = null;
    }
  }
  popUpValidation(){
    var MMDP:boolean;
    var O:boolean;
    var D:boolean;
    if(this.EscruturaCualitativa.Ortografia==null &&
      this.EscruturaCualitativa.Deletreo==null &&
      this.EscruturaCualitativa.MovilidadDeLaManoDominante ==null){
     this.popupsave = true
     return
      }
      if (this.EscruturaCualitativa.MovilidadDeLaManoDominante == 1 &&
        (this.EscruturaCualitativa.MMDParesiaDeLaManoDominante == null || this.EscruturaCualitativa.MMDParesiaDeLaManoDominante == false)&&
        (this.EscruturaCualitativa.MMDPlejia == null || this.EscruturaCualitativa.MMDPlejia == false)){
        MMDP = false
      } else {
        MMDP = true
      }
      if (this.EscruturaCualitativa.Deletreo == 1 &&
        (this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra == null || this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra == false)&&
        (this.EscruturaCualitativa.DOmision == null || this.EscruturaCualitativa.DOmision == false)&&
        (this.EscruturaCualitativa.DSustitucion == null || this.EscruturaCualitativa.DSustitucion == false)){
        O = false
      } else {
        O = true
      }
      if (this.EscruturaCualitativa.Ortografia == 1 &&
        (this.EscruturaCualitativa.OErroresFonologicamentePlausibles == null ||  this.EscruturaCualitativa.OErroresFonologicamentePlausibles== false)&&
        (this.EscruturaCualitativa.OLexicalizacionDeNoPalabras == null ||  this.EscruturaCualitativa.OLexicalizacionDeNoPalabras== false)&&
        (this.EscruturaCualitativa.OParagrafiasFormales == null || this.EscruturaCualitativa.OParagrafiasFormales == false)&&
        (this.EscruturaCualitativa.OParagrafiasMorfologicas == null || this.EscruturaCualitativa.OParagrafiasMorfologicas == false)&&
        (this.EscruturaCualitativa.OParagrafiasSemanticas == null || this.EscruturaCualitativa.OParagrafiasSemanticas == false)){
        D = false
      } else {
        D = true
      }
      if(O && D && MMDP){
        this.popupsave=true
      }else{
        this.popupsave=false
      }
  }

  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }
  suspend(){
    this.EscrituraCuantitativa.WasSuspended = true;
  }
  total(){
    this.EscrituraCuantitativa.SubTotal=this.EscrituraCuantitativa.Aclaracion+
                                        this.EscrituraCuantitativa.Dirchole+
                                        this.EscrituraCuantitativa.EME+
                                        this.EscrituraCuantitativa.Esperanza+
                                        this.EscrituraCuantitativa.Gente+
                                        this.EscrituraCuantitativa.Guela+
                                        this.EscrituraCuantitativa.Jo+
                                        this.EscrituraCuantitativa.ManoMano+
                                        this.EscrituraCuantitativa.ZETA;
  }
  saved(){
    this.CopyEscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra;
    this.CopyEscruturaCualitativa.DOmision=this.EscruturaCualitativa.DOmision;
    this.CopyEscruturaCualitativa.DSustitucion=this.EscruturaCualitativa.DSustitucion;
    this.CopyEscruturaCualitativa.Deletreo=this.EscruturaCualitativa.Deletreo;
    this.CopyEscruturaCualitativa.Grafismo=this.EscruturaCualitativa.Grafismo;
    this.CopyEscruturaCualitativa.MMDParesiaDeLaManoDominante=this.EscruturaCualitativa.MMDParesiaDeLaManoDominante;
    this.CopyEscruturaCualitativa.MMDPlejia=this.EscruturaCualitativa.MMDPlejia;
    this.CopyEscruturaCualitativa.ManoNoDominante=this.EscruturaCualitativa.ManoNoDominante;
    this.CopyEscruturaCualitativa.MovilidadDeLaManoDominante=this.EscruturaCualitativa.MovilidadDeLaManoDominante;
    this.CopyEscruturaCualitativa.OErroresFonologicamentePlausibles=this.EscruturaCualitativa.OErroresFonologicamentePlausibles;
    this.CopyEscruturaCualitativa.OLexicalizacionDeNoPalabras=this.EscruturaCualitativa.OLexicalizacionDeNoPalabras;
    this.CopyEscruturaCualitativa.OParagrafiasFormales=this.EscruturaCualitativa.OParagrafiasFormales;
    this.CopyEscruturaCualitativa.OParagrafiasMorfologicas=this.EscruturaCualitativa.OParagrafiasMorfologicas;
    this.CopyEscruturaCualitativa.OParagrafiasSemanticas=this.EscruturaCualitativa.OParagrafiasSemanticas;
    this.CopyEscruturaCualitativa.Ortografia=this.EscruturaCualitativa.Ortografia;

  }
  cancel(){
    this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=this.CopyEscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra;
    this.EscruturaCualitativa.DOmision=this.CopyEscruturaCualitativa.DOmision;
    this.EscruturaCualitativa.DSustitucion=this.CopyEscruturaCualitativa.DSustitucion;
    this.EscruturaCualitativa.Deletreo=this.CopyEscruturaCualitativa.Deletreo;
    this.EscruturaCualitativa.Grafismo=this.CopyEscruturaCualitativa.Grafismo;
    this.EscruturaCualitativa.MMDParesiaDeLaManoDominante=this.CopyEscruturaCualitativa.MMDParesiaDeLaManoDominante;
    this.EscruturaCualitativa.MMDPlejia=this.CopyEscruturaCualitativa.MMDPlejia;
    this.EscruturaCualitativa.ManoNoDominante=this.CopyEscruturaCualitativa.ManoNoDominante;
    this.EscruturaCualitativa.MovilidadDeLaManoDominante=this.CopyEscruturaCualitativa.MovilidadDeLaManoDominante;
    this.EscruturaCualitativa.OErroresFonologicamentePlausibles=this.CopyEscruturaCualitativa.OErroresFonologicamentePlausibles;
    this.EscruturaCualitativa.OLexicalizacionDeNoPalabras=this.CopyEscruturaCualitativa.OLexicalizacionDeNoPalabras;
    this.EscruturaCualitativa.OParagrafiasFormales=this.CopyEscruturaCualitativa.OParagrafiasFormales;
    this.EscruturaCualitativa.OParagrafiasMorfologicas=this.CopyEscruturaCualitativa.OParagrafiasMorfologicas;
    this.EscruturaCualitativa.OParagrafiasSemanticas=this.CopyEscruturaCualitativa.OParagrafiasSemanticas;
    this.EscruturaCualitativa.Ortografia=this.CopyEscruturaCualitativa.Ortografia;
  }
  cuantitativoFieldValidation():boolean{
    if ((this.EscrituraCuantitativa.Aclaracion == null || this.EscrituraCuantitativa.Dirchole == null ||
      this.EscrituraCuantitativa.EME == null || this.EscrituraCuantitativa.Esperanza == null ||
      this.EscrituraCuantitativa.Gente == null || this.EscrituraCuantitativa.Guela == null ||
      this.EscrituraCuantitativa.Jo == null || this.EscrituraCuantitativa.ManoMano == null ||
      this.EscrituraCuantitativa.ZETA == null) &&
      this.EscrituraCuantitativa.WasSuspended == false
    ) {
      this._toastr.error('Todos los campos cuantitativos son requeridos. Si el usuario no puede finalizar el paso, suspenda el paso actual y continue con el siguiente','Compruebe los campos');
      return false;
    }
    if (this.EscrituraCuantitativa.WasSuspended == true) {
      return true;
    }
    if (this.EscrituraCuantitativa.Aclaracion != null && this.EscrituraCuantitativa.Dirchole != null &&
      this.EscrituraCuantitativa.EME != null && this.EscrituraCuantitativa.Esperanza != null &&
      this.EscrituraCuantitativa.Gente != null && this.EscrituraCuantitativa.Guela != null &&
      this.EscrituraCuantitativa.Jo != null && this.EscrituraCuantitativa.ManoMano != null &&
      this.EscrituraCuantitativa.ZETA != null ) {
      return true;
   }
  }
  next() {
    if(this.cuantitativoFieldValidation()){
      this.event.emit(1)
      this.emitCualitativa.emit(this.EscruturaCualitativa);
      this.emitCuantitativa.emit(this.EscrituraCuantitativa);
    }

  }
  back() {
    this.event.emit(-1)
  }
}
