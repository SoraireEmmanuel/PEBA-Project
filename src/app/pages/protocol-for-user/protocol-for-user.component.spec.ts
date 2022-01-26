import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolForUserComponent } from './protocol-for-user.component';

describe('ProtocolForUserComponent', () => {
  let component: ProtocolForUserComponent;
  let fixture: ComponentFixture<ProtocolForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
