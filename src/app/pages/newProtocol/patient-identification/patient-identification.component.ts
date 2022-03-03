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
  @Output() event = new EventEmitter<number>();
  PatientIdentification: PatientIdentification = new PatientIdentification();
  PatientDate: patient = new patient();
  constructor() {

  }
  ngOnInit(): void {
  }

  next() {
    this.event.emit(1)
  }
  back() {
    this.event.emit(-1)
  }
}
