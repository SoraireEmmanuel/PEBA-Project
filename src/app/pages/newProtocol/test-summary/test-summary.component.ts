import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { summaryCualitativeTable } from 'src/app/clases/summaryCualitativeTable';
import { Valuation } from 'src/app/clases/valuation';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {
  @Input() protocol: ProtocoloDTO;
  @Output() event = new EventEmitter<number>();
  @Output() sendProtocol = new EventEmitter<ProtocoloDTO>();

  ProtocolSummary: ProtocoloDTO = new ProtocoloDTO();
  valuation:Valuation=new Valuation();
  summaryCualitativa:summaryCualitativeTable=new summaryCualitativeTable();
  constructor(public _ModalService:NgbModal,
    config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false; }

  ngOnInit(): void {
    this.ProtocolSummary = this.protocol;
    this.valuation.Auditiva = this.valuationCharge(this.ProtocolSummary.ComprensionAuditiva_CuantitativaDTO.Subtotal)
    this.valuation.Oral = this.valuationCharge(this.ProtocolSummary.ExpresionOral_CuantitativaSTO.SubTotal);
    this.valuation.Repeticion = this.valuationCharge(this.ProtocolSummary.Repeticion_CuantitativaDTO.SubTotal);
    this.valuation.Denominacion = this.valuationCharge(this.ProtocolSummary.Denominacion_CuantitativaDTO.SubTotal);
    this.valuation.Lectura = this.valuationCharge(this.ProtocolSummary.Lectura_CuantitativaDTO.SubTotal);
    this.valuation.Escritura = this.valuationCharge(this.ProtocolSummary.Escritura_CuantitativaDTO.SubTotal);
    this.summaryCualitativa.summary(this.protocol);
    console.log(this.summaryCualitativa)
  }
  //Funciones de pre carga de los resumenes
  valuationCharge(value: number): string {
    if (value == 6) {
      return 'Conservado';
    }
    if (value < 6 && value >= 5) {
      return 'Alteración Leve';
    }
    if (value < 5 && value >= 3) {
      return 'Alteración Moderada';
    }
    if (value < 3 && value >= 0) {
      return 'Alteración Severa';
    }
  }
  //Funciones de Navegacion
  back() {
    this.event.emit(-1)
  }
  sendProtocolFunction(modal) {
    const modalSpiner = this._ModalService.open(modal, {size: 'xl', centered: true})
      setTimeout(() => {
        modalSpiner.close();
        localStorage.setItem('protocol', JSON.stringify(this.ProtocolSummary));
        //this.sendProtocol.emit(this.ProtocolSummary);

      }, 5000);

  }
}
