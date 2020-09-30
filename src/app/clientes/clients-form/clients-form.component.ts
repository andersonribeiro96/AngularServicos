import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String;


  constructor(private services: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.services.getClienteById(id).subscribe(value => {
        this.cliente = value
      }, errorReponse => {
        this.cliente = new Cliente();
      })
    }
  }




  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.services.updateCliente(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = null;
      })
    } else {
      this.services.salvarCliente(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.error
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/lista-cliente'])
  }

}
