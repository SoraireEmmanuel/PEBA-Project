import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { SintomasNeurologicosDTO } from 'src/app/clases/SintomasNeurologicosDTO';

@Component({
  selector: 'app-current-neurological-symptoms',
  templateUrl: './current-neurological-symptoms.component.html',
  styleUrls: ['./current-neurological-symptoms.component.css']
})
export class CurrentNeurologicalSymptomsComponent implements OnInit {
  @Input() symptomsEntry:SintomasNeurologicosDTO;
  @Output() event = new EventEmitter<number>();
  @Output() protocolSymptoms= new EventEmitter<SintomasNeurologicosDTO>()
  symptoms:SintomasNeurologicosDTO=new SintomasNeurologicosDTO();
  dropdownOptions:NeurologicalSymptomsDropdownOption=new NeurologicalSymptomsDropdownOption;
  constructor() { }

  ngOnInit(): void {
    this.symptoms=this.symptomsEntry;
  }

alerta(){
  console.log(this.symptoms.Alerta)
}
next() {
  this.event.emit(1);
  this.protocolSymptoms.emit(this.symptoms);
}
back() {
  this.event.emit(-1);
}
}
