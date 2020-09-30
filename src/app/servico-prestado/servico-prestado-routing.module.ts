import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';

const routes: Routes = [
  {
    path: 'servicos-prestado-form' , component: ServicoPrestadoFormComponent
  },
  {
    path: 'servicos-prestado-lista', component: ServicoPrestadoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
