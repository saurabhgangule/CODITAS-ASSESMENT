import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgProgressBarComponent } from './avg-progress-bar.component';

describe('AvgProgressBarComponent', () => {
  let component: AvgProgressBarComponent;
  let fixture: ComponentFixture<AvgProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
