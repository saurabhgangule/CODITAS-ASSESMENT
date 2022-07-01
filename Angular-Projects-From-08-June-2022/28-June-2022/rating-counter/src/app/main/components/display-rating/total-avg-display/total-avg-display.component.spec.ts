import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAvgDisplayComponent } from './total-avg-display.component';

describe('TotalAvgDisplayComponent', () => {
  let component: TotalAvgDisplayComponent;
  let fixture: ComponentFixture<TotalAvgDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAvgDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalAvgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
