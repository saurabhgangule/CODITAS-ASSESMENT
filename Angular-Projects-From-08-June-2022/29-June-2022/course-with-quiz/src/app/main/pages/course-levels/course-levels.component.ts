import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILevels } from 'src/app/models/courseInterface';

@Component({
  selector: 'app-course-levels',
  templateUrl: './course-levels.component.html',
  styleUrls: ['./course-levels.component.css']
})
export class CourseLevelsComponent implements OnInit {
  @Input() levelData!: ILevels;
  @Output() emitLevelId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLevelSelect(levelId: number) {
    this.emitLevelId.emit(levelId);
  }

}
