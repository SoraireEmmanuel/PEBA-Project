import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {
  @Input() protocol:ProtocoloDTO;
  @Output() event = new EventEmitter<number>();
  @Output() sendProtocol = new EventEmitter<ProtocoloDTO>();

  ProtocolSummary:ProtocoloDTO=new ProtocoloDTO();
  nivelesFuncionales:string[]=['Conservado','Alteracion Leve','Alteracion Moderada','Alteracion Severa']
  nivelFuncionalPorPaso:string[]=['2.2','','','','','']
  constructor() { }

  ngOnInit(): void {
    this.ProtocolSummary=this.protocol;
  }
  next() {
    this.event.emit(1)
    this.sendProtocol.emit(this.ProtocolSummary);
  }
  back() {
    this.event.emit(-1)

  }

}
