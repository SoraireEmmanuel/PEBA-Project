import { Component, OnInit } from '@angular/core';
import { patient } from 'src/app/clases/patient';
import { PatientIdentification } from 'src/app/clases/PatientIdentification';

@Component({
  selector: 'app-patient-identification',
  templateUrl: './patient-identification.component.html',
  styleUrls: ['./patient-identification.component.css']
})
export class PatientIdentificationComponent implements OnInit {
  PatientIdentification:PatientIdentification= new PatientIdentification();
  PatientDate:patient=new patient();
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
