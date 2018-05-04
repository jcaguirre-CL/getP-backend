import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snackbarcustom',
  templateUrl: './snackbarcustom.component.html',
  styleUrls: ['./snackbarcustom.component.css']
})
export class SnackbarcustomComponent {
    /** The message to be shown in the snack bar. */
    public static message: string;

    /** The label for the button in the snack bar. */
    public static action: string;

  constructor(private snackBarRef: MatSnackBarRef<SnackbarcustomComponent>) { }
  close() {
    this.snackBarRef.dismiss();
  }
}
