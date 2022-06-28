import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInputItemComponent } from './budget-input-item.component';

describe('BudgetInputItemComponent', () => {
  let component: BudgetInputItemComponent;
  let fixture: ComponentFixture<BudgetInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetInputItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
