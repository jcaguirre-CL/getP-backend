import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My imports
import {  MatButtonModule,
          MatToolbarModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatCardModule,
          MatTabsModule,
          MatSidenavModule,
          MatGridListModule,
          MatTableModule,
          MatTooltipModule,
          MatRadioModule,
          MatIconModule,
          MatCheckboxModule,
          MatSelectModule,
          MatSnackBarModule
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
