import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {
optionreturn:number;
  constructor(private route:Router) { }

  ngOnInit(): void {

  }
fa(number:number){
this.optionreturn=number;

}
  navigateNewProtocol(){
    this.route.navigate(['newProtocol'])
  }
  allProtocolsByPatient(){
    this.route.navigate(['allProtocolsByPatient'])
  }
}
