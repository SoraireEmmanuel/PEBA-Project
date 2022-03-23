import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {
  @ViewChild('loadData') loadData: TemplateRef<any>;
  optionreturn: number;
  constructor(private _route: Router,
              public _ModalService:NgbModal,
              config: NgbModalConfig) {
                config.backdrop = 'static';
                config.keyboard = false;
              }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.dataLoadComponent();
  }
  fa(number: number) {
    this.optionreturn = number;
  }
  dataLoadComponent() {
    const modalRef = this._ModalService.open(this.loadData, {size: 'xl', centered: true});
    setTimeout(() => {
      modalRef.close();
      this._route.navigate(['myPatients'])
    }, 5000);
  }
  navigateNewProtocol() {
    this._route.navigate(['newProtocol'])
  }
  allProtocolsByPatient() {
    this._route.navigate(['allProtocolsByPatient'])
  }
}
