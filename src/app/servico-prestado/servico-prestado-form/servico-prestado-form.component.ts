import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[];
  servico: ServicoPrestado;
  success: boolean = false;
  errors: [];


  constructor(private clientesService: ClientesService, private servicosServices: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService.getAllClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  onSubmit() {
    this.servicosServices.salvarServico(this.servico).subscribe(response => {
      this.success = true;
      this.errors = null;
      this.servico = response;
      this.servico = new ServicoPrestado();
    }, responseError => {
      this.success = false;
      this.errors = responseError.error.error
    })
  }
}
