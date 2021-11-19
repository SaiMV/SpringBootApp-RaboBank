import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboHomeComponent } from './rabo-home.component';

describe('RaboHomeComponent', () => {
  let component: RaboHomeComponent;
  let fixture: ComponentFixture<RaboHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
