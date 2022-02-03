import { Component, OnInit } from '@angular/core';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { SintomasNeurologicosDTO } from 'src/app/clases/SintomasNeurologicosDTO';

@Component({
  selector: 'app-current-neurological-symptoms',
  templateUrl: './current-neurological-symptoms.component.html',
  styleUrls: ['./current-neurological-symptoms.component.css']
})
export class CurrentNeurologicalSymptomsComponent implements OnInit {
  symptoms:SintomasNeurologicosDTO=new SintomasNeurologicosDTO();
  dropdownOptions:NeurologicalSymptomsDropdownOption=new NeurologicalSymptomsDropdownOption;
  constructor() { }

  ngOnInit(): void {
  }
alerta(){
  console.log(this.symptoms.Alerta)
}
}
