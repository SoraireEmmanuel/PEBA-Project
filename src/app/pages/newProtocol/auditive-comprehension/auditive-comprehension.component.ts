import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComprensionAuditiva_CuantitativaDTO } from 'src/app/clases/ComprensionAuditiva_CuantitativaDTO';
import { QuestionsStep1 } from 'src/app/clases/QuestionsStep1';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { ComprensionAuditiva_CualitativaDTO } from 'src/app/clases/ComprensionAuditiva_CualitativaDTO';

@Component({
  selector: 'app-auditive-comprehension',
  templateUrl: './auditive-comprehension.component.html',
  styleUrls: ['./auditive-comprehension.component.css']
})
export class AuditiveComprehensionComponent implements OnInit {
  @Input() auditivecuantitativa: ComprensionAuditiva_CuantitativaDTO;
  @Input() auditivecualitativa: ComprensionAuditiva_CualitativaDTO;
  @Output() event = new EventEmitter<number>();
  @Output() emitCualitativa = new EventEmitter<ComprensionAuditiva_CualitativaDTO>();
  @Output() emitCuantitativa = new EventEmitter<ComprensionAuditiva_CuantitativaDTO>();
  QuestionOptions:QuestionsStep1=new QuestionsStep1();
  ComprensionAuditivaCuantitativa:ComprensionAuditiva_CuantitativaDTO= new ComprensionAuditiva_CuantitativaDTO();
  ComprensionAuditivaCualitativa:ComprensionAuditiva_CualitativaDTO=new ComprensionAuditiva_CualitativaDTO();
  CopyComprensionAuditivaCaulitativa:ComprensionAuditiva_CualitativaDTO= new ComprensionAuditiva_CualitativaDTO();
  popupsave:boolean;
  constructor( public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.ComprensionAuditivaCualitativa=this.auditivecualitativa;
    this.ComprensionAuditivaCuantitativa=this.auditivecuantitativa;
    this.CopyComprensionAuditivaCaulitativa=this.auditivecualitativa;
    this.popUpValidation();
  }
  clear(){
    if(this.ComprensionAuditivaCualitativa.ComandosOidosAlterada==0 ){
      this.ComprensionAuditivaCualitativa.COOmiteParteDelComando=null;
      this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando=null;
      this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando=null;
    }
    if(this.ComprensionAuditivaCualitativa.PalabraOidaAlterada==0 ){
      this.ComprensionAuditivaCualitativa.POErroresFormales=null;
      this.ComprensionAuditivaCualitativa.POErroresNoRelacionados=null;
      this.ComprensionAuditivaCualitativa.POErroresSemanticos=null
    }
  }
  popUpValidation(){
    var CO:boolean=true;
    var PO:boolean=true;
    if(this.ComprensionAuditivaCualitativa.ComandosOidosAlterada==null && this.ComprensionAuditivaCualitativa.PalabraOidaAlterada==null ){
      this.popupsave=true;
      return
    }
    if(this.ComprensionAuditivaCualitativa.ComandosOidosAlterada==1){
      if((this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando==null || this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando==false) &&
        (this.ComprensionAuditivaCualitativa.COOmiteParteDelComando==null || this.ComprensionAuditivaCualitativa.COOmiteParteDelComando==false) &&
        (this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando==null || this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando==false)){
          CO=false;
        }else{
          if(this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando==false&&
            this.ComprensionAuditivaCualitativa.COOmiteParteDelComando==false&&
            this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando==false){
              CO=false;
            }
            else{
              CO=true;
            }
        }
    }
    if(this.ComprensionAuditivaCualitativa.PalabraOidaAlterada==1){
      if((this.ComprensionAuditivaCualitativa.POErroresFormales==null || this.ComprensionAuditivaCualitativa.POErroresFormales==false)&&
        (this.ComprensionAuditivaCualitativa.POErroresNoRelacionados==null||this.ComprensionAuditivaCualitativa.POErroresNoRelacionados==false)&&
        (this.ComprensionAuditivaCualitativa.POErroresSemanticos==null||this.ComprensionAuditivaCualitativa.POErroresSemanticos==false)){
          PO=false;
        }else{
          if(this.ComprensionAuditivaCualitativa.POErroresFormales==false&&
            this.ComprensionAuditivaCualitativa.POErroresNoRelacionados==false&&
            this.ComprensionAuditivaCualitativa.POErroresSemanticos==false){
              PO=false;
          }
          else{
            PO=true
          }
        }
    }
    if(CO == false || PO == false){
      this.popupsave=false;
      return
    }
    else{
      this.popupsave=true;
      return
    }
  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend(){
    this.ComprensionAuditivaCuantitativa.WasSuspended = true;
  }

  total(){
    this.ComprensionAuditivaCuantitativa.Subtotal=this.ComprensionAuditivaCuantitativa.SenialeElPato+this.ComprensionAuditivaCuantitativa.SenialeElTecho+this.ComprensionAuditivaCuantitativa.SenialeLaOveja+this.ComprensionAuditivaCuantitativa.SenialeLaPuerta+this.ComprensionAuditivaCuantitativa.ToqueseLaOreja;
  }
  saved(){
    this.CopyComprensionAuditivaCaulitativa.COCambiaElOrdenDelComando=this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando;
    this.CopyComprensionAuditivaCaulitativa.COOmiteParteDelComando=this.ComprensionAuditivaCualitativa.COOmiteParteDelComando;
    this.CopyComprensionAuditivaCaulitativa.COSustituyeParteDelComando=this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando;
    this.CopyComprensionAuditivaCaulitativa.ComandosOidosAlterada=this.ComprensionAuditivaCualitativa.ComandosOidosAlterada;
    this.CopyComprensionAuditivaCaulitativa.POErroresFormales=this.ComprensionAuditivaCualitativa.POErroresFormales;
    this.CopyComprensionAuditivaCaulitativa.POErroresNoRelacionados=this.ComprensionAuditivaCualitativa.POErroresNoRelacionados;
    this.CopyComprensionAuditivaCaulitativa.POErroresSemanticos=this.ComprensionAuditivaCualitativa.POErroresSemanticos;
    this.CopyComprensionAuditivaCaulitativa.PalabraOidaAlterada=this.ComprensionAuditivaCualitativa.PalabraOidaAlterada;
  }
  cancel(){
    this.ComprensionAuditivaCualitativa.COCambiaElOrdenDelComando = this.CopyComprensionAuditivaCaulitativa.COCambiaElOrdenDelComando;
    this.ComprensionAuditivaCualitativa.COOmiteParteDelComando = this.CopyComprensionAuditivaCaulitativa.COOmiteParteDelComando;
    this.ComprensionAuditivaCualitativa.COSustituyeParteDelComando = this.CopyComprensionAuditivaCaulitativa.COSustituyeParteDelComando;
    this.ComprensionAuditivaCualitativa.ComandosOidosAlterada = this.CopyComprensionAuditivaCaulitativa.ComandosOidosAlterada;
    this.ComprensionAuditivaCualitativa.POErroresFormales = this.CopyComprensionAuditivaCaulitativa.POErroresFormales;
    this.ComprensionAuditivaCualitativa.POErroresNoRelacionados = this.CopyComprensionAuditivaCaulitativa.POErroresNoRelacionados;
    this.ComprensionAuditivaCualitativa.POErroresSemanticos = this.CopyComprensionAuditivaCaulitativa.POErroresSemanticos;
    this.ComprensionAuditivaCualitativa.PalabraOidaAlterada = this.CopyComprensionAuditivaCaulitativa.PalabraOidaAlterada;
  }
  next() {
    if((this.ComprensionAuditivaCuantitativa.SenialeElPato==null || this.ComprensionAuditivaCuantitativa.SenialeElTecho==null||
      this.ComprensionAuditivaCuantitativa.SenialeLaOveja==null || this.ComprensionAuditivaCuantitativa.SenialeLaPuerta==null ||
      this.ComprensionAuditivaCuantitativa.ToqueseLaOreja==null)&& this.ComprensionAuditivaCuantitativa.WasSuspended==false
      ){
        console.log('todos los campos cuantitativos son requeridos. Si el ')
        return
      }
    if(this.ComprensionAuditivaCuantitativa.WasSuspended==true){
      this.event.emit(1)
      this.emitCualitativa.emit(this.ComprensionAuditivaCualitativa);
      this.emitCuantitativa.emit(this.ComprensionAuditivaCuantitativa);
    }
    if(this.ComprensionAuditivaCuantitativa.SenialeElPato!=null || this.ComprensionAuditivaCuantitativa.SenialeElTecho!=null||
      this.ComprensionAuditivaCuantitativa.SenialeLaOveja!=null || this.ComprensionAuditivaCuantitativa.SenialeLaPuerta!=null ||
      this.ComprensionAuditivaCuantitativa.ToqueseLaOreja!=null){
        this.event.emit(1)
        this.emitCualitativa.emit(this.ComprensionAuditivaCualitativa);
        this.emitCuantitativa.emit(this.ComprensionAuditivaCuantitativa);
      }
  }
  back() {
    this.event.emit(-1)
  }
}
