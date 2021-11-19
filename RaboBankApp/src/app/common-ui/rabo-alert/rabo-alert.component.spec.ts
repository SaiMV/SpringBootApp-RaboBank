import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboAlertComponent } from './rabo-alert.component';

describe('RaboAlertComponent', () => {
  let component: RaboAlertComponent;
  let fixture: ComponentFixture<RaboAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
