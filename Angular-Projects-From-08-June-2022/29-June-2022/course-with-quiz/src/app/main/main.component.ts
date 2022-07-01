import { Component, OnInit } from '@angular/core';
import { ILevelDetails, ILevels } from '../models/courseInterface';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  levelsData!: ILevels[];
  levelDetails!: ILevels[];
  changeSection: boolean = false;


  constructor(private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.levelsData = await this.httpService.getCourseLevels()
  }

  showCourseCompletionPopup() {
    alert('Congratulation you completed all levels');
  }

  handleNavigation(levelId: number) {
    this.levelDetails = this.levelsData.filter(data => data.levelId === levelId);
    this.changeSection = true;
  }

  handleLevelId(completedLevel: number) {
    if (completedLevel === 10) {
      this.showCourseCompletionPopup();
    } else {
      this.levelsData = this.levelsData.map(level => {
        if (level.levelId === completedLevel) {
          level.isComplete = true;
        }
        if (level.levelId === completedLevel + 1) {
          level.hasAccess = true;
        }
        return level;
      })
      this.changeSection = false;
    }
  }

}
