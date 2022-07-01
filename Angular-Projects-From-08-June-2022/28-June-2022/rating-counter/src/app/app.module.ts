import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RatingComponentComponent } from './main/components/rating-component/rating-component.component';
import { DisplayRatingComponent } from './main/components/display-rating/display-rating.component';
import { InputCardComponent } from './main/components/rating-component/input-card/input-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvgProgressBarComponent } from './main/components/display-rating/avg-progress-bar/avg-progress-bar.component';
import { TotalAvgDisplayComponent } from './main/components/display-rating/total-avg-display/total-avg-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RatingComponentComponent,
    DisplayRatingComponent,
    InputCardComponent,
    AvgProgressBarComponent,
    TotalAvgDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
