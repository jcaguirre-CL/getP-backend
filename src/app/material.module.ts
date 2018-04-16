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
          MatSelectModule
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
    MatSelectModule
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
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
