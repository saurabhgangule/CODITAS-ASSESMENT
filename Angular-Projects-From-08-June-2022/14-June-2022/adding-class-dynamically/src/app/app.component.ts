import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-assesments';
  data = [
    { name: 'Akash', score: 70 },
    { name: 'Saurabh', score: 40 },
    { name: 'Sagar', score: 85 },
    { name: 'Abhilash', score: 70 },
    { name: 'Vikas', score: 57 },
    { name: 'Pradnya', score: 21 }
  ]
  setClass(_score: number) {
    return {
      green: _score > 65,
      amber: _score < 65 && _score > 50,
      red: _score < 50 && _score > 35,
      maroon: _score < 35
    }
  }
}
