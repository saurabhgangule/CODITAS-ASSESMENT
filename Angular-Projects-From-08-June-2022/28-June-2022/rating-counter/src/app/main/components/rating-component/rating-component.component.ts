import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IratingData } from 'src/app/models/ratingDataInterface';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.css']
})
export class RatingComponentComponent implements OnInit {
  @Output() ratingDataEmitter: EventEmitter<IratingData> = new EventEmitter()
  ratingForm = new FormGroup({
    ambience: new FormControl(''),
    cleanliness: new FormControl(''),
    service: new FormControl(''),
    food: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  ratingFormSubmitHandler(form: FormGroup) {
    this.ratingDataEmitter.emit(form.value);
  }

}
