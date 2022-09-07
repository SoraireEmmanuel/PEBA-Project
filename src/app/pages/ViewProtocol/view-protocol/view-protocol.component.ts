import { Component, ElementRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { PatientIdentification } from 'src/app/clases/PatientIdentification';
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { Valuation } from 'src/app/clases/valuation';
import { summaryCualitativeTable } from 'src/app/clases/summaryCualitativeTable';
import { QuestionsStep1 } from 'src/app/clases/QuestionsStep1';
import { QuestionsStep2 } from 'src/app/clases/QuestionsStep2';
import { QuestionsStep3 } from 'src/app/clases/QuestionsStep3';
import { QuestionStep4 } from 'src/app/clases/QuestionStep4';
import { QuestionStep5 } from 'src/app/clases/QuestionStep5';
import { QuestionStep6 } from 'src/app/clases/QuestionStep6';
import { PatientService } from 'src/app/services/Patient/patient.service';
import { ProtocolDTO } from 'src/app/clases/ProtocolDTO';

@Component({
  selector: 'app-view-protocol',
  templateUrl: './view-protocol.component.html',
  styleUrls: ['./view-protocol.component.css']
})
export class ViewProtocolComponent implements OnInit {
  @ViewChild('Encabezado') Encabezado: ElementRef;
  @ViewChild('P1CA') P1CA: ElementRef;
  @ViewChild('P2EO') P2EO: ElementRef;
  @ViewChild('P3R') P3R: ElementRef;
  @ViewChild('P4D') P4D: ElementRef;
  @ViewChild('P5L') P5L: ElementRef;
  @ViewChild('P6E') P6E: ElementRef;
  @ViewChild('TablaCuantitativa') TablaCuantitativa: ElementRef;
  @ViewChild('TablaCualitativa') TablaCualitativa: ElementRef;
  @ViewChild('spiner') spiner: ElementRef;
  @ViewChild('protocolDetail') protocolDetail: TemplateRef<any>;

  Id_Protocolo:number;
  Id_Paciente:number;
  protocol:ProtocolDTO=new ProtocolDTO();
  patient: PatientIdentification= new PatientIdentification();
  valuation:Valuation=new Valuation();
  summaryCualitativa:summaryCualitativeTable=new summaryCualitativeTable();
  QStep1:QuestionsStep1=new QuestionsStep1();
  QStep2:QuestionsStep2=new QuestionsStep2();
  QStep3:QuestionsStep3= new QuestionsStep3();
  QStep4:QuestionStep4=new QuestionStep4();
  QStep5:QuestionStep5=new QuestionStep5();
  QStep6:QuestionStep6= new QuestionStep6();
  OptionNotCharge:string = 'Opcion no cargada'
  constructor(public _ModalService:NgbModal,
              config: NgbModalConfig,
              private _localservice:LocalServiceService,
              private _patientService:PatientService,
              private _rutaActiva: ActivatedRoute) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.Id_Protocolo=this._rutaActiva.snapshot.params.Id_Protocolo;
    this.Id_Paciente=this._rutaActiva.snapshot.params.Id_Paciente;
    this.dataLoadComponent();
  }
  ngAfterViewInit(): void {
  }
  dataLoadComponent() {
    const modalRef = this._ModalService.open(this.protocolDetail, {size: 'xl', centered: true});
    this._patientService.viewProtocol(this.Id_Paciente,this.Id_Protocolo).subscribe(resp=>{
      this.protocol=resp;
      console.log('esta es la respuesta del servidor')
      console.log(resp)
      console.log('Este es Protocol')
      console.log(this.protocol)
      //this.valuation.Oral = this.valuationCharge(this.protocol.ExpresionOral_Cuantitativa.SubTotal);
      //this.valuation.Auditiva = this.valuationCharge(this.protocol.ComprensionAuditiva_Cuantitativa.SubTotal)
      //this.valuation.Repeticion = this.valuationCharge(this.protocol.Repeticion_Cuantitativa.SubTotal);
      //this.valuation.Denominacion = this.valuationCharge(this.protocol.Denominacion_Cuantitativa.SubTotal);
      //this.valuation.Lectura = this.valuationCharge(this.protocol.Lectura_Cuantitativa.SubTotal);
      //this.valuation.Escritura = this.valuationCharge(this.protocol.Escritura_Cuantitativa.SubTotal);
      this.valuation.valuationChargeAll(this.protocol)
      this.summaryCualitativa.summary(this.protocol);
      modalRef.close();
    },(error)=>{
      console.log(error)
      modalRef.close();
    })
  }
  createFullPDF(modal) {
    const modalRef = this._ModalService.open(modal, {size: 'xl', centered: true});
    html2canvas(this.Encabezado.nativeElement).then((canvas) => {
      const encabezado = canvas.toDataURL();
      html2canvas(this.P1CA.nativeElement).then((canvas) => {
        const p1 = canvas.toDataURL();
        html2canvas(this.P2EO.nativeElement).then((canvas) =>{
          const p2 = canvas.toDataURL();
          html2canvas(this.P3R.nativeElement).then((canvas)=>{
            const p3 = canvas.toDataURL();
            html2canvas(this.P4D.nativeElement).then((canvas)=>{
              const p4 = canvas.toDataURL();
              html2canvas(this.P5L.nativeElement).then((canvas)=>{
                const p5 = canvas.toDataURL();
                html2canvas(this.P6E.nativeElement).then((canvas)=>{
                  const p6 = canvas.toDataURL();
                  html2canvas(this.TablaCuantitativa.nativeElement).then((canvas)=>{
                    const Tcuant = canvas.toDataURL();
                    html2canvas(this.TablaCualitativa.nativeElement).then((canvas)=>{
                      const Tcual = canvas.toDataURL();
                      const docDefinition = {
                        content:[{
                          image: encabezado,
                          width:500,
                          margin: [10 , 10]
                        },
                      {
                        image: p1,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: p2,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: p3,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: p4,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: p5,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: p6,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: Tcuant,
                        width:500,
                        margin: [10 , 10]
                      },
                      {
                        image: Tcual,
                        width:500,
                        margin: [10 , 10]
                      }]
                      }
                      pdfMake.createPdf(docDefinition).open();
                      modalRef.close();
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }
  createSummaryPDF(modal){
    const modalRef = this._ModalService.open(modal, {size: 'xl', centered: true});
    html2canvas(this.Encabezado.nativeElement).then((canvas) => {
      const encabezado = canvas.toDataURL()
      html2canvas(this.TablaCuantitativa.nativeElement).then((canvas) => {
        const Tcuant = canvas.toDataURL();
        html2canvas(this.TablaCualitativa.nativeElement).then((canvas) => {
          const Tcual = canvas.toDataURL();
          const pdf = {
            content:[{
              image: encabezado,
              width:500,
              margin: [10 , 10]
            },{
              image: Tcuant,
              width:500,
              margin: [10 , 10]
            },{
              image: Tcual,
              width:500,
              margin: [10 , 10]
            }]
          }
          pdfMake.createPdf(pdf).open();
          modalRef.close();
        })
      })
    })
  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }
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

}
