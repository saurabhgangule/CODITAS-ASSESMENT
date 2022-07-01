import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILevelQuiz } from 'src/app/models/courseInterface';

@Component({
  selector: 'app-level-quiz',
  templateUrl: './level-quiz.component.html',
  styleUrls: ['./level-quiz.component.css']
})
export class LevelQuizComponent implements OnInit {
  @Input() quiz!: ILevelQuiz;
  currentFlag: boolean = false;
  currentOption!: string;
  currentAnswer!: string;
  showMessage: boolean = true;
  @Output() levelCompleteFlagEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChecked(answer: string, currentOption: string) {
    const flag = answer === currentOption ? true : false;
    this.currentFlag = flag;
    this.currentOption = currentOption;
    this.currentAnswer = answer;
    this.showMessage = flag;
    this.levelCompleteFlagEmit.emit(flag);
  }

}
