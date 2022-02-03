import { Component, OnInit } from '@angular/core';
import { ComprensionAuditiva_CuantitativaDTO } from 'src/app/clases/ComprensionAuditiva_CuantitativaDTO';
import { QuestionsStep1 } from 'src/app/clases/QuestionsStep1';

@Component({
  selector: 'app-auditive-comprehension',
  templateUrl: './auditive-comprehension.component.html',
  styleUrls: ['./auditive-comprehension.component.css']
})
export class AuditiveComprehensionComponent implements OnInit {
  QuestionOptions:QuestionsStep1=new QuestionsStep1();
  ComprensionAuditivaCuantitativa:ComprensionAuditiva_CuantitativaDTO= new ComprensionAuditiva_CuantitativaDTO();
  constructor() { }

  ngOnInit(): void {
  }

}
