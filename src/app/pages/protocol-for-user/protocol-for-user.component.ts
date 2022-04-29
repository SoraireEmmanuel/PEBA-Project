import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Protocolos } from 'src/app/clases/protocolos';
import { PatientService } from 'src/app/services/Patient/patient.service';

@Component({
  selector: 'app-protocol-for-user',
  templateUrl: './protocol-for-user.component.html',
  styleUrls: ['./protocol-for-user.component.css']
})
export class ProtocolForUserComponent implements OnInit {
  @ViewChild('protocolHistory') protocolHistory: TemplateRef<any>;
  Id_Paciente:number;
  protocoloslist:Protocolos[]=[];
  constructor(private _router:Router,
               public _ModalService:NgbModal,
               private _rutaActiva: ActivatedRoute,
               private _patientService: PatientService,
                config: NgbModalConfig) {
                config.backdrop = 'static';
                config.keyboard = false;
                }

  ngOnInit(): void {
    this.Id_Paciente=this._rutaActiva.snapshot.params.PatientId;
    console.log(this.Id_Paciente)
  }
  ngAfterViewInit(): void {
    this.dataLoadComponent();
  }
  dataLoadComponent() {
    const modalRef = this._ModalService.open(this.protocolHistory, {size: 'xl', centered: true});
    this._patientService.myProtocolList(this.Id_Paciente).subscribe(resp=>{
      this.protocoloslist=resp
      modalRef.close()
    },(error)=>{
      modalRef.close()
      console.log(error)
    } )
  }

viewProtocol(protocolo:Protocolos){
  this._router.navigate([`viewProtocol/${protocolo.id_Protocolo}/${protocolo.Id_Paciente}`])
}


}
