import { Component, OnInit } from '@angular/core';
import { ProtocoloDTO } from 'src/app/clases/ProtocoloDTO';


@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.component.html',
  styleUrls: ['./new-protocol.component.css']
})
export class NewProtocolComponent implements OnInit {
  Protocol:ProtocoloDTO;
  Progress:number=0;
  constructor() {

  }
  ngOnInit(): void {
  }

progressEvent(event:number){
console.log(event)
this.Progress=this.Progress+event;
window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth',
});
}
}
