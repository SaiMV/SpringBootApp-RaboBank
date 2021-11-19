import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboPageNotFoundComponent } from './rabo-page-not-found.component';

describe('RaboPageNotFoundComponent', () => {
  let component: RaboPageNotFoundComponent;
  let fixture: ComponentFixture<RaboPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
