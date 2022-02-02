import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdentificationComponent } from './patient-identification.component';

describe('PatientIdentificationComponent', () => {
  let component: PatientIdentificationComponent;
  let fixture: ComponentFixture<PatientIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
