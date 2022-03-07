import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { PatientIdentification } from 'src/app/clases/PatientIdentification';


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

  constructor() {

  }
  ngOnInit(): void {
    this.PatientIdentification=this.protocolEntry;
  }

  next() {
  if(this.PatientIdentification.FechaProtocolo==null){
    console.log('La fecha del protocolo es un dato obligatorio');
  }
  else{
    this.event.emit(1)
    this.protocolPatien.emit(this.PatientIdentification);
  }

  }

}
