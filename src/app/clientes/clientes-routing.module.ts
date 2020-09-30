import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes-form' , component: ClientsFormComponent
  },
  {
    path:'lista-cliente' , component: ClientesListaComponent
  },
  {
    path: 'clientes-form/:id' , component: ClientsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
