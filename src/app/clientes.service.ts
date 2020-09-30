import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = "http://localhost:8080/clientes";

  constructor(private http: HttpClient) { }


  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getClienteById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente);
  }

  deleteCliente(cliente:Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.delete<Cliente>(url);
  }

}
