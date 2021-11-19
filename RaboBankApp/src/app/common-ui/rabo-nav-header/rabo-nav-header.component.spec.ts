import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboNavHeaderComponent } from './rabo-nav-header.component';

describe('RoboNavHeaderComponent', () => {
  let component: RoboNavHeaderComponent;
  let fixture: ComponentFixture<RoboNavHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboNavHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
