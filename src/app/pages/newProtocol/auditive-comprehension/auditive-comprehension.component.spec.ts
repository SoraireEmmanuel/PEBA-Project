import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditiveComprehensionComponent } from './auditive-comprehension.component';

describe('AuditiveComprehensionComponent', () => {
  let component: AuditiveComprehensionComponent;
  let fixture: ComponentFixture<AuditiveComprehensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditiveComprehensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditiveComprehensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
