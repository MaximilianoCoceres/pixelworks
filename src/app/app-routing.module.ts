import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosDetailsComponent } from './servicios-details/servicios-details.component';



const routes: Routes = [
{path:'nuestros-servicios', component: ServiciosDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
