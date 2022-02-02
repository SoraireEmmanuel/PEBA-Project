import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNeurologicalSymptomsComponent } from './current-neurological-symptoms.component';

describe('CurrentNeurologicalSymptomsComponent', () => {
  let component: CurrentNeurologicalSymptomsComponent;
  let fixture: ComponentFixture<CurrentNeurologicalSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNeurologicalSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNeurologicalSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
