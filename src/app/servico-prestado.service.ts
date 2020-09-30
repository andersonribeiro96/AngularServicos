import { ServicoPRestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  baseUrl = "http://localhost:8080/servicos-prestado"

  constructor(private http: HttpClient) { }

  salvarServico(servico: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.baseUrl, servico);
  }

  buscarServicos(nome?: string, mes?: number): Observable<ServicoPRestadoBusca[]> {
    if (nome) {
      const httpParams = new HttpParams()
        .set("nome", nome)
        .set("mes", mes ? mes.toString() : '');
      const url = this.baseUrl + "?" + httpParams.toString();
      console.log(url);
      return this.http.get<ServicoPRestadoBusca[]>(url);
    } else {
      const httpParams = new HttpParams()
        .set("mes", mes ? mes.toString() : '');
      const url = this.baseUrl + "?" + httpParams.toString();
      console.log(url);
      return this.http.get<ServicoPRestadoBusca[]>(url);
    }


  }

}
