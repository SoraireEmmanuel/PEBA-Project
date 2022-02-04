import { Component, OnInit } from '@angular/core';
import { Denominacion_CuantitativaDTO } from 'src/app/clases/Denominacion_CuantitativaDTO';
import { QuestionStep4 } from 'src/app/clases/QuestionStep4';

@Component({
  selector: 'app-denomination',
  templateUrl: './denomination.component.html',
  styleUrls: ['./denomination.component.css']
})
export class DenominationComponent implements OnInit {
DenominacionCuantitativa:Denominacion_CuantitativaDTO=new Denominacion_CuantitativaDTO();
DropdownOptions:QuestionStep4=new QuestionStep4();
  constructor() { }

  ngOnInit(): void {
  }

}
