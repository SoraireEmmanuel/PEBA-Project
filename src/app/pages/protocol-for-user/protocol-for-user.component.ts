import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protocol-for-user',
  templateUrl: './protocol-for-user.component.html',
  styleUrls: ['./protocol-for-user.component.css']
})
export class ProtocolForUserComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

viewProtocol(id:number){
  this._router.navigate(['viewProtocol'])
}

downloadFullProtocol(){

}

dowloadSummaryProtocol(){

}

}
