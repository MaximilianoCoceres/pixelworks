import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';



@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],

})
export class EquipoComponent implements OnInit {

  errorHttp:boolean=false;
  empleados:any;


  empleos:any=[
    {
      "empleo":"Diseñador grafico",
      "icono": 'fa-solid fa-paintbrush'
    },

    {
      "empleo":"Diseñador UX/UI",
      "icono": 'fa-solid fa-users'},
    {
      "empleo":"Fotógrafo",
      "icono": 'fa-solid fa-camera'},
    {
      "empleo":"Diseñador web",
      "icono": 'fa-solid fa-keyboard'},
    {
      "empleo":"Community Manager",
      "icono": 'fa-solid fa-hashtag'},
    {
      "empleo":"Lic. Markenting",
      "icono": 'fa-solid fa-head-side-virus'},

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


rastrearPor(indice:number, elemento:string){
  console.log(indice,elemento)
}


}
