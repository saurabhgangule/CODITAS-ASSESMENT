import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPartComponent,
    SecondPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
