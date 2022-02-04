import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {
nivelesFuncionales:string[]=['Conservado','Alteracion Leve','Alteracion Moderada','Alteracion Severa']
nivelFuncionalPorPaso:string[]=['2','','','','','']
  constructor() { }

  ngOnInit(): void {
  }



}
