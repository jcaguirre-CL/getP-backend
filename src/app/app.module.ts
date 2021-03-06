import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { routerTransition } from './router.animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { RevisarComponent } from './revisar/revisar.component';
import { ApiService } from './api.service';
import { SnackbarcustomComponent } from './snackbarcustom/snackbarcustom.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearComponent,
    ActualizarComponent,
    RevisarComponent,
    SnackbarcustomComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  providers: [ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [
    SnackbarcustomComponent
  ]
})
export class AppModule { }
