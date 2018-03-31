import { Component } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { routerTransition } from './router.animations';
import { trigger, style, transition, animate, group, state } from '@angular/animations';
import { FormControl } from '@angular/forms';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'app';
  mode = new FormControl('over');
  shouldRun = true;
  bindingVar = '';
  constructor(public router: Router) { }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  inicio() {
    this.fadeOut();
    // this.toggle();
  }

  consultar() {
    this.fadeOut();
    // this.fadeIn();
    // this.toggle();
  }
  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

}
