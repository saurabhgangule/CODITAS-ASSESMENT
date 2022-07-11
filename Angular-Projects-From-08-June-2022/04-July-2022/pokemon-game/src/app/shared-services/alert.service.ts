import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(message: string, type: string, horizontalPosition: MatSnackBarHorizontalPosition = 'start', verticalPosition: MatSnackBarVerticalPosition = 'bottom') {
    this._snackBar.open(message, type, {
      duration: 3000,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }
}
