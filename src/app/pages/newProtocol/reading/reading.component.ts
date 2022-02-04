import { Component, OnInit } from '@angular/core';
import { Lectura_CuantitativaDTO } from 'src/app/clases/Lectura_CuantitativaDTO';
import { QuestionStep5 } from 'src/app/clases/QuestionStep5';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
DropdownOptions:QuestionStep5=new QuestionStep5();
LecturaCuantitativa:Lectura_CuantitativaDTO=new Lectura_CuantitativaDTO();
  constructor() { }

  ngOnInit(): void {
  }

}
