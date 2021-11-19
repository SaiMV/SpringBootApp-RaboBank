import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaboTransactionsComponent } from './rabo-transactions.component';

describe('RaboTransactionsComponent', () => {
  let component: RaboTransactionsComponent;
  let fixture: ComponentFixture<RaboTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaboTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaboTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
