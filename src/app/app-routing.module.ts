import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { RevisarComponent } from './revisar/revisar.component';
import { AppComponent } from './app.component';

const routes = [
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' } },
  { path: 'crear', component: CrearComponent, data: { animation: 'crear' } },
  { path: 'actualizar', component: ActualizarComponent, data: { animation: 'actualizar' } },
  { path: 'revisar', component: RevisarComponent, data: { animation: 'revisar' } },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [InicioComponent, CrearComponent, ActualizarComponent, RevisarComponent];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});




