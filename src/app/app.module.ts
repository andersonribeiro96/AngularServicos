import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesService } from './clientes.service';
import { RouterModule } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/templetes/navbar/navbar.component';
import { SidebarComponent } from './components/templetes/sidebar/sidebar.component';
import { FooterComponent } from './components/templetes/footer/footer.component';
import { HomeComponent } from './components/templetes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    RouterModule,
    HttpClientModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
