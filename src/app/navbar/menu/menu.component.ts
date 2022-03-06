import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
active:number=0;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateMisPacientes(){
    this.active=0;
    console.log(this.active)
    this.route.navigate(['myPatients']);
  }
  navigateResgitrarNuevoPaciente(){
    this.active=1;
    this.route.navigate(['registerNewPatient']);
  }

}
