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
          MatIconModule
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
    MatIconModule
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
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
