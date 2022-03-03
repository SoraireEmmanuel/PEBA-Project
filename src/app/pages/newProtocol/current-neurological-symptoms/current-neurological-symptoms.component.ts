import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { SintomasNeurologicosDTO } from 'src/app/clases/SintomasNeurologicosDTO';

@Component({
  selector: 'app-current-neurological-symptoms',
  templateUrl: './current-neurological-symptoms.component.html',
  styleUrls: ['./current-neurological-symptoms.component.css']
})
export class CurrentNeurologicalSymptomsComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  symptoms:SintomasNeurologicosDTO=new SintomasNeurologicosDTO();
  dropdownOptions:NeurologicalSymptomsDropdownOption=new NeurologicalSymptomsDropdownOption;
  constructor() { }

  ngOnInit(): void {
  }
alerta(){
  console.log(this.symptoms.Alerta)
}
next() {
  this.event.emit(1)
}
back() {
  this.event.emit(-1)
}
}
