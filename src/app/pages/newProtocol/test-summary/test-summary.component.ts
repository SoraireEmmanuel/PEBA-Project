import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';
import { summaryCualitativeTable } from 'src/app/clases/summaryCualitativeTable';
import { Valuation } from 'src/app/clases/valuation';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { LocalServiceService } from 'src/app/services/CryptoServices/LocalService/local-service.service';
import { ProtocolDTO } from 'src/app/clases/ProtocolDTO';
import { PatientService } from 'src/app/services/Patient/patient.service';
import { ViewProtocol } from 'src/app/clases/ViewProtocol';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {
  @Input() protocol: ProtocolDTO;
  @Output() event = new EventEmitter<number>();
  @Output() sendProtocol = new EventEmitter<ProtocoloDTO>();

  ProtocolSummary: ProtocolDTO = new ProtocolDTO();
  valuation:Valuation=new Valuation();
  summaryCualitativa:summaryCualitativeTable=new summaryCualitativeTable();
  success:any;
  viewProtocolo:ViewProtocol = new ViewProtocol();
  constructor(public _ModalService:NgbModal,
    private _loadService:LocalServiceService,
    private _Route:Router,
    private _toastr: ToastrService,
    private _localService:LocalServiceService,
    private _patientService:PatientService,
    config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false; }

  ngOnInit(): void {
    this.ProtocolSummary = this.protocol;
    this.valuation.valuationChargeAll(this.ProtocolSummary);
    this.summaryCualitativa.summary(this.ProtocolSummary);
    console.log(this.ProtocolSummary)
    console.log(this.protocol)
  }
  //Funciones de Navegacion
  back() {
    this.event.emit(-1)
  }
  sendProtocolFunction(modal, modalSuccess) {
    console.log(this.ProtocolSummary)
    const modalSpiner = this._ModalService.open(modal, {size: 'xl', centered: true})
    this._patientService.saveProtocol(this.ProtocolSummary).subscribe(
      resp => {
        console.log(resp)
        this._loadService.setJsonValue('ExitProtocol',{ExitProtocol: false})
        this.success= this._ModalService.open(modalSuccess, {size: 'xl', centered: true})
        modalSpiner.close();
        this.viewProtocolo.Id_Protocol=resp.Id_Protocolo;
        this.viewProtocolo.Id_Paciente=resp.Id_Paciente;
        //this.success = this._ModalService.open(modalSuccess, {size: 'xl', centered: true})
      }, (error)=>{
        modalSpiner.close();
        this._toastr.error('Por favor espere unos segundos e intente de nuevamente','Error Inesperado del servidor')
        console.log(error)
      }
    )
  }
  viewProtocol(){
    this.success.close();
    this._Route.navigate([`viewProtocol/${this.viewProtocolo.Id_Protocol}/${this.viewProtocolo.Id_Paciente}`])
  }
  goMisPacientes(){
    this.success.close();
    this._Route.navigate(['myPatients'])
  }
}
