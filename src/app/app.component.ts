import { Component } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { routerTransition } from './router.animations';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'app';
  constructor(public router: Router) { }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
