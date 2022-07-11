import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPokemon } from 'src/app/models/interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  pokemonTypes = [
    {
      id: 1,
      name: 'Water'
    },
    {
      id: 2,
      name: 'Fire'
    },
    {
      id: 3,
      name: 'Leaf'
    },
    {
      id: 4,
      name: 'Steel'
    }
  ]
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPokemon
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
