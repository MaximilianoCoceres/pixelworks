import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ServiciosComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  exports:[],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
