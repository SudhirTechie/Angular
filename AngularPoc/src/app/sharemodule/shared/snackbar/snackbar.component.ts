import {Component,Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material';

@Component({
    selector: 'snack-bar-component-example-snack',
    templateUrl: 'snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
  })

  export class SnackBarComponent {
    constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  }