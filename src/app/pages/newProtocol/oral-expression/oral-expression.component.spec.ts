import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralExpressionComponent } from './oral-expression.component';

describe('OralExpressionComponent', () => {
  let component: OralExpressionComponent;
  let fixture: ComponentFixture<OralExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
