import { Component, OnInit } from '@angular/core';
import { QuestionsStep3 } from 'src/app/clases/QuestionsStep3';
import { Repeticion_CuantitativaDTO } from 'src/app/clases/Repeticion_CuantitativaDTO';

@Component({
  selector: 'app-repetition',
  templateUrl: './repetition.component.html',
  styleUrls: ['./repetition.component.css']
})
export class RepetitionComponent implements OnInit {
  DropdownOptions:QuestionsStep3=new QuestionsStep3();
  RepeticionCuantitativa:Repeticion_CuantitativaDTO=new Repeticion_CuantitativaDTO();
  constructor() { }

  ngOnInit(): void {
  }

}
