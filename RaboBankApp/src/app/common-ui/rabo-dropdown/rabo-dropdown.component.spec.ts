import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboDropdownComponent } from './rabo-dropdown.component';

describe('RaboDropdownComponent', () => {
  let component: RaboDropdownComponent;
  let fixture: ComponentFixture<RaboDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
