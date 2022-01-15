import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProtocolComponent } from './new-protocol.component';

describe('NewProtocolComponent', () => {
  let component: NewProtocolComponent;
  let fixture: ComponentFixture<NewProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
