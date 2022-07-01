import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelVideosComponent } from './level-videos.component';

describe('LevelVideosComponent', () => {
  let component: LevelVideosComponent;
  let fixture: ComponentFixture<LevelVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
