import { Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  errorHttp:boolean=false;
  servicios:any;

  serviceId:any=0;

constructor(private http: HttpClient,private router:Router){



}



cargarServicios(){
  return this.http.get('../../assets/servicios.json').subscribe(
   { next:(respuesta:any)=>{this.servicios = respuesta;},
    error:(respuesta: Response)=>{this.errorHttp = true;}}
  );
}

abrirDetalleServicio(serviceId: any) {
  this.router.navigate(['/servicios', serviceId]);
}

ngOnInit(): void {
this.cargarServicios();
}

}
