import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error-component/error-component';
import { HomeComponent } from './components/home-component/home-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { MenuComponent } from './components/menu-component/menu-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
