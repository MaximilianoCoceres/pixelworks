import { Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  errorHttp:boolean=false;
  servicios:any;

constructor(private http: HttpClient){



}

cargarServicios(){
  return this.http.get('../../assets/servicios.json').subscribe(
   { next:(respuesta:any)=>{this.servicios = respuesta;},
    error:(respuesta: Response)=>{this.errorHttp = true;}}
  );
}

ngOnInit(): void {
this.cargarServicios();
}

}
