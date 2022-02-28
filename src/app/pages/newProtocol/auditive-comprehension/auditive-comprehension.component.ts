import { Component, OnInit } from '@angular/core';
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
  QuestionOptions:QuestionsStep1=new QuestionsStep1();
  ComprensionAuditivaCuantitativa:ComprensionAuditiva_CuantitativaDTO= new ComprensionAuditiva_CuantitativaDTO();
  ComprensionAuditivaCualitativa:ComprensionAuditiva_CualitativaDTO=new ComprensionAuditiva_CualitativaDTO();
  CopyComprensionAuditivaCaulitativa:ComprensionAuditiva_CualitativaDTO= new ComprensionAuditiva_CualitativaDTO();
  constructor( public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
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

}
