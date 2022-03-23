import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'

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

  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

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
}
