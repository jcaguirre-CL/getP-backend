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
          MatTooltipModule
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
    MatTooltipModule
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
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
