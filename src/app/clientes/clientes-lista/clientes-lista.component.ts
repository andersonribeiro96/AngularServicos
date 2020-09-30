import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente
  mensagemSucesso: string;
  mensagemErro: String;

  constructor(private services: ClientesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.services.getAllClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
  }

  deletarCliente() {
    this.services.deleteCliente(this.clienteSelecionado)
      .subscribe(response =>{
        this.mensagemSucesso = 'Cliente deletado com sucesso!';
        this.ngOnInit();
      }, responseError => {
        this.mensagemErro = 'Ocorreu um ao deletar o cliente!'
      })
  }

  prepararDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

}
