import { Component, OnInit } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';

@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.component.html',
  styleUrls: ['./new-protocol.component.css']
})
export class NewProtocolComponent implements OnInit {
  Protocol:ProtocoloDTO;
  viewComponent:number;
  constructor() {
    this.viewComponent=1;
  }

  ngOnInit(): void {
  }
}
