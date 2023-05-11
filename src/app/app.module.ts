import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { EquipoComponent } from './equipo/equipo.component';






@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ServiciosComponent,
    PortfolioComponent,
    CarouselComponent,
    MarcasComponent,
    EquipoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule


  ],
  exports:[],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
