import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosDetailsComponent } from './servicios-details/servicios-details.component';









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
    ContactoComponent,
     FooterComponent,
     ServiciosDetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
