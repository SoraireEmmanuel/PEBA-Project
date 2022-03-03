import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {
  @Input() dataEntry:ProtocoloDTO;
  @Output() event = new EventEmitter<number>();
nivelesFuncionales:string[]=['Conservado','Alteracion Leve','Alteracion Moderada','Alteracion Severa']
nivelFuncionalPorPaso:string[]=['2.2','','','','','']
  constructor() { }

  ngOnInit(): void {
  }
  next() {
    this.event.emit(1)
  }
  back() {
    this.event.emit(-1)
  }

}
