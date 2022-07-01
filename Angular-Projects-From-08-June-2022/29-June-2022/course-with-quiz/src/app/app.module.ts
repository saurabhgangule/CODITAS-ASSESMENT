import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CourseLevelsComponent } from './main/pages/course-levels/course-levels.component';
import { CourseLevelDetailsComponent } from './main/pages/course-level-details/course-level-details.component';
import { LevelQuizComponent } from './main/pages/course-level-details/level-quiz/level-quiz.component';
import { LevelVideosComponent } from './main/pages/course-level-details/level-videos/level-videos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CourseLevelsComponent,
    CourseLevelDetailsComponent,
    LevelQuizComponent,
    LevelVideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
