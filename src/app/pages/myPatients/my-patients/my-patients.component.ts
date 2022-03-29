import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { strictEqual } from 'assert';
import { error } from 'console';
import { Pacientes } from 'src/app/clases/Pacientes';
import { PatientService } from 'src/app/services/Patient/patient.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {
  @ViewChild('loadData') loadData: TemplateRef<any>;
  optionreturn: number;
  patientList:Pacientes[]=[];
  patientListCopy:Pacientes[]=[];
  datalistContent:string;
  constructor(private _route: Router,
              public _ModalService:NgbModal,
              private _patientServices:PatientService,
              config: NgbModalConfig) {
                config.backdrop = 'static';
                config.keyboard = false;
              }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.dataLoadComponent();
  }
  fa() {
    var auxPatient:Pacientes []= [];
    for (let index = 0; index < this.patientListCopy.length; index++) {
      if( this.patientListCopy[index].Cod_Paciente.includes(this.datalistContent)){
        auxPatient.push(this.patientListCopy[index])
      }
    }
    this.patientList=auxPatient;
  }
  dataLoadComponent() {
    const modalRef = this._ModalService.open(this.loadData, {size: 'xl', centered: true});
    this._patientServices.myPatientList().subscribe(resp=>{
      this.patientList=resp;
      this.patientListCopy=resp;
      modalRef.close();
    },(error)=>{
      console.log(error);
      modalRef.close();
    })


  }
  navigateNewProtocol(patient:Pacientes) {
    this._route.navigate(['newProtocol/:Bilingual/:BilingualIdioma/:Cod_Paciente/:Dominancia/:Estudios/:FechaNacimiento/:Id_Paciente/:Iniciales/:Lengua'])
  }
  allProtocolsByPatient(patient:Pacientes) {
    this._route.navigate([`allProtocolsByPatient/${patient.Id_Paciente}`])
  }
}
