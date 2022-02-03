import { Component, OnInit } from '@angular/core';
import { ExpresionOral_CuantitativaDTO } from 'src/app/clases/ExpresionOral_CuantitativaDTO';
import { QuestionsStep2 } from 'src/app/clases/QuestionsStep2';

@Component({
  selector: 'app-oral-expression',
  templateUrl: './oral-expression.component.html',
  styleUrls: ['./oral-expression.component.css']
})
export class OralExpressionComponent implements OnInit {
DropdownOptions:QuestionsStep2=new QuestionsStep2();
ExpresionOral:ExpresionOral_CuantitativaDTO=new ExpresionOral_CuantitativaDTO;
  constructor() { }

  ngOnInit(): void {
  }

}
