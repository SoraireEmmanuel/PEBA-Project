import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewPatientsComponent } from './register-new-patients.component';

describe('RegisterNewPatientsComponent', () => {
  let component: RegisterNewPatientsComponent;
  let fixture: ComponentFixture<RegisterNewPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
