import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';

const routes = [
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' } },
  // { path: 'component3', component: Component3Component },
  // { path: 'component4', component: Component4Component },
  // { path: 'component5', component: Component5Component },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [InicioComponent];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});




