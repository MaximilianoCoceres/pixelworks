import { Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {

  marcas=[
    {"img":"../../../assets/images/Amazon_logo.svg.png",
    "alt":"logo Amazon"},
    {"img":"../../../assets/images/logo-ford.png",
    "alt":"logo ford"},
    {"img":"../../../assets/images/logo-msi-2017-oficial.png",
    "alt":"logo msi"},
    {"img":"../../../assets/images/Marvel-Comics-logo.png",
    "alt":"logo marvel"},
    {"img":"../../../assets/images/PHILIPS.png",
    "alt":"logo philips"},
    {"img":"../../../assets/images/Starbucks.png",
    "alt":"logo starbucks"}



  ]

}
