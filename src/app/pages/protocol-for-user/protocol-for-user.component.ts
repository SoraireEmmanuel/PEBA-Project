import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-protocol-for-user',
  templateUrl: './protocol-for-user.component.html',
  styleUrls: ['./protocol-for-user.component.css']
})
export class ProtocolForUserComponent implements OnInit {
  @ViewChild('protocolHistory') protocolHistory: TemplateRef<any>;
  constructor(private _router:Router,
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
  dataLoadComponent() {
    const modalRef = this._ModalService.open(this.protocolHistory, {size: 'xl', centered: true});
    setTimeout(() => {
      modalRef.close();

    }, 5000);
  }

viewProtocol(id:number){
  this._router.navigate(['viewProtocol'])
}

downloadFullProtocol(){

}

dowloadSummaryProtocol(){

}

}
