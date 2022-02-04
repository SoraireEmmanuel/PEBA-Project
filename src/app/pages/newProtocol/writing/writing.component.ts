import { Component, OnInit } from '@angular/core';
import { Escritura_CuantitativaDTO } from 'src/app/clases/Escritura_CuantitativaDTO';
import { QuestionStep6 } from 'src/app/clases/QuestionStep6';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
DropdownOptions:QuestionStep6= new QuestionStep6();
EscrituraCuantitativa:Escritura_CuantitativaDTO=new Escritura_CuantitativaDTO();
  constructor() { }

  ngOnInit(): void {
  }

}
