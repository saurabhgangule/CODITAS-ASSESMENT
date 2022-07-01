import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLevelDetailsComponent } from './course-level-details.component';

describe('CourseLevelDetailsComponent', () => {
  let component: CourseLevelDetailsComponent;
  let fixture: ComponentFixture<CourseLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseLevelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
