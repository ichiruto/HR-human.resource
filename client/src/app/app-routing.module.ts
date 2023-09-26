import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { ValidarComponent } from './components/validar/validar.component';

const routes: Routes = [
  { path: '', redirectTo: '/registros', pathMatch: 'full' },
  { path: 'registros', component: RegistrosComponent },
  { path: 'NOMEDOCOLABORADOR/registrar', component: RegistrarComponent },
  { path: 'NOMEDOCOLABORADOR/validar', component: ValidarComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
