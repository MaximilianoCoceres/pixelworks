import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  errorHttp:boolean=false;
  empleados:any;


  empleos=[
    {"empleo":"Diseñador grafico"},
    {"empleo":"Diseñador UX/UI"},
    {"empleo":"Fotógrafo"},
    {"empleo":"Diseñador web"},
    {"empleo":"Community Manager"},
    {"empleo":"Lic. Markenting"},

  ]

constructor(private http: HttpClient){}

cargarEmpleados(){
  return this.http.get("https://randomuser.me/api/?results=6").subscribe({
    next:(respuesta:any)=>{ this.empleados=respuesta.results},
      error:(respuesta: Response)=>{this.errorHttp = true;}
  })

  }

ngOnInit(): void {
  this.cargarEmpleados();

}



}
