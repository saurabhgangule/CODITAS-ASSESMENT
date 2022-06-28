import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBudgetDisplayComponent } from './total-budget-display.component';

describe('TotalBudgetDisplayComponent', () => {
  let component: TotalBudgetDisplayComponent;
  let fixture: ComponentFixture<TotalBudgetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBudgetDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalBudgetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
