import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboLoginComponent } from './rabo-login.component';

describe('RaboLoginComponent', () => {
  let component: RaboLoginComponent;
  let fixture: ComponentFixture<RaboLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
