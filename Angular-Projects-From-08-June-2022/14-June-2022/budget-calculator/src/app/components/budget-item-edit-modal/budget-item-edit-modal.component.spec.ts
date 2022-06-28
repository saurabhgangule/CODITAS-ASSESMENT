import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemEditModalComponent } from './budget-item-edit-modal.component';

describe('BudgetItemEditModalComponent', () => {
  let component: BudgetItemEditModalComponent;
  let fixture: ComponentFixture<BudgetItemEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
