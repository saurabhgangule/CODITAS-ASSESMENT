import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { levelsData } from 'src/app/backend/backend';
import { ILevelDetails, ILevelQuiz, ILevels } from 'src/app/models/courseInterface';

@Component({
  selector: 'app-course-level-details',
  templateUrl: './course-level-details.component.html',
  styleUrls: ['./course-level-details.component.css']
})
export class CourseLevelDetailsComponent implements OnInit {

  @Input() levelDetails!: ILevels[]
  getLevelData!: ILevels;
  @Output() sendhandleLevelCompleteFlagEmit = new EventEmitter();
  currentLevelData!: ILevelQuiz[];
  constructor() { }

  ngOnInit(): void {
    this.getLevelData = this.levelDetails[0];
    this.currentLevelData = this.getLevelData.levelDetails.quizQuestions;
  }

  handleLevelCompleteFlagEmit(isAnsCorrect: boolean, completedLevel: number, currentQuiz: ILevelQuiz) {
    if (isAnsCorrect) {
      this.currentLevelData = this.currentLevelData.map((quiz: ILevelQuiz) => {
        if (quiz === currentQuiz) {
          quiz.isAttempted = true;
        }
        return quiz;
      })
    }
    const isAllComplete = this.currentLevelData.every((each: { isAttempted: boolean; }) => each.isAttempted === true);
    if (isAllComplete)
      this.sendhandleLevelCompleteFlagEmit.emit(completedLevel)
  }

}
