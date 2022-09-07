import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { PatientIdentification } from 'src/app/clases/PatientIdentification';
import { ToastrService } from 'ngx-toastr';
import { RegisterOptions } from 'src/app/clases/RegisterOptions';

@Component({
  selector: 'app-patient-identification',
  templateUrl: './patient-identification.component.html',
  styleUrls: ['./patient-identification.component.css']
})
export class PatientIdentificationComponent implements OnInit {
  @Input() dataEntry: number;
  @Input() protocolEntry: PatientIdentification;
  @Output() event = new EventEmitter<number>();
  @Output() protocolPatien = new EventEmitter<PatientIdentification>();
  PatientIdentification: PatientIdentification = new PatientIdentification();
  patient:patient=new patient();
  PatientOption: RegisterOptions = new RegisterOptions();
  bilingual:boolean;
  constructor(private _toastr:ToastrService) {

  }
  ngOnInit(): void {
    this.PatientIdentification=this.protocolEntry;
    this.bilingual= this.PatientIdentification.isBilingual;
    console.log(this.PatientIdentification)
  }

  next() {
  if(this.PatientIdentification.FechaProtocolo==null){
    this._toastr.error('El campo "Fecha del Protocolo" es obligatorio','Compruebe los campos');
  }
  else{
    this.event.emit(1)
    this.protocolPatien.emit(this.PatientIdentification);
  }

  }

}
