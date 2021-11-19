import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboListTableComponent } from './robo-list-table.component';

describe('RoboListTableComponent', () => {
  let component: RoboListTableComponent;
  let fixture: ComponentFixture<RoboListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
