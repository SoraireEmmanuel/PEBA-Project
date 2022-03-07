import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { stringify } from 'querystring';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';

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
  nivelesFuncionales: string[] = ['Conservado', 'Alteracion Leve', 'Alteracion Moderada', 'Alteracion Severa']
  valuation = { Auditiva: '', Oral: '', Repeticion: '', Denominacion: '', Lectura: '', Escritura: '' };
  SummaryCualitative = [{ EmparejamientoPalabraOida: '', ComandosOidos: '' },
                        {Fluencia:'', Prosodia: '', Articulacion:'', CodificacionFonologica:'',ProcesamientoSintaxtico:'', ProcesamientoLexico:''  },
                        {Articulacion:'', CodificacionFonologica:'', ProcesamientoLexico:'', ProcesamientoSintaxtico:''},
                        {Articulacion:'', CodificacionFonologica:'', ProcesamientoLexico:''},
                        {LecturaNoPalabras:'', LecturaPalabras:'', EmparejamientoPalabraEscrita:'', ComprensionComandoEscrito:''},
                        {MovilidadManoDominante:'', ManoNoDominante:'', Grafismo:'', Deletreo:'', Ortografia:''}]
  auditivaSummaryCualittive: string = '';
  constructor() { }

  ngOnInit(): void {
    this.ProtocolSummary = this.protocol;
    this.valuation.Auditiva = this.valuationCharge(this.ProtocolSummary.ComprensionAuditiva_CuantitativaDTO.Subtotal)
    this.valuation.Oral = this.valuationCharge(this.ProtocolSummary.ExpresionOral_CuantitativaSTO.SubTotal);
    this.valuation.Repeticion = this.valuationCharge(this.ProtocolSummary.Repeticion_CuantitativaDTO.SubTotal);
    this.valuation.Denominacion = this.valuationCharge(this.ProtocolSummary.Denominacion_CuantitativaDTO.SubTotal);
    this.valuation.Lectura = this.valuationCharge(this.ProtocolSummary.Lectura_CuantitativaDTO.SubTotal);
    this.valuation.Escritura = this.valuationCharge(this.ProtocolSummary.Escritura_CuantitativaDTO.SubTotal);
    this.summaryAuditivaCualittiva();
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

  summaryAuditivaCualittiva() {
    if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada != null) {
      if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 1) {
        this.SummaryCualitative[0].EmparejamientoPalabraOida = 'Se observaron las siguientes Alteraciones en el emparejamiento palabra Oída-dibujo: '
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.POErroresFormales == true) {
          this.SummaryCualitative[0].EmparejamientoPalabraOida = this.SummaryCualitative[0].EmparejamientoPalabraOida + '<Errores formales>'
        }
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.POErroresSemanticos == true) {
          this.SummaryCualitative[0].EmparejamientoPalabraOida = this.SummaryCualitative[0].EmparejamientoPalabraOida + '<Errores semánticos>'
        }
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.POErroresNoRelacionados == true) {
          this.SummaryCualitative[0].EmparejamientoPalabraOida = this.SummaryCualitative[0].EmparejamientoPalabraOida + '<Erroes no relacionados>'
        }
      }
      if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 0) {
        this.SummaryCualitative[0].EmparejamientoPalabraOida = '<No se observaron Alteraciones en el emparejamiento palabra Oída-dibujo>'
      }
    }
    if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada != null) {
      if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 1) {
        this.SummaryCualitative[0].ComandosOidos = 'Se observaron las siguientes Alteraciones en los comandos oídos: '
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.COCambiaElOrdenDelComando == true) {
          this.SummaryCualitative[0].ComandosOidos = this.SummaryCualitative[0].ComandosOidos + '<Cambia el orden del comando> '
        }
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.COOmiteParteDelComando == true) {
          this.SummaryCualitative[0].ComandosOidos = this.SummaryCualitative[0].ComandosOidos + '<Omite parte del Comando>'
        }
        if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.COSustituyeParteDelComando == true) {
          this.SummaryCualitative[0].ComandosOidos = this.SummaryCualitative[0].ComandosOidos + '<Sustituye parte del Comando>'
        }
      }
      if (this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 0) {
        this.SummaryCualitative[0].ComandosOidos = 'No se observaron Alteraciones en los comandos oídos'
      }
    }
    if(this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == null &&
      this.ProtocolSummary.ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == null){
        this.SummaryCualitative[0].EmparejamientoPalabraOida='No se realizaron observaciones cualitativas.'
    }
  }

  //Funciones de Navegacion
  back() {
    this.event.emit(-1)

  }
  sendProtocolFunction() {
    this.sendProtocol.emit(this.ProtocolSummary);
  }

}
