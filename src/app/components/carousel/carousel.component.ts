import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    {
      src: '../../../assets/images/diseño-grafico-min.jpg',
      alt: 'Proyecto 1',
      title: 'Proyecto 1',
      description: 'Descripción de la imagen 1'
    },
    {
      src: '../../../assets/images/app-movil-a-medida.jpg',
      alt: 'Proyecto 2',
      title: 'Proyecto 2',
      description: 'Descripción de la imagen 2'
    },
    {
      src: '../../../assets/images/branding-min.jpg',
      alt: 'Proyecto 3',
      title: 'Proyecto 3',
      description: 'Descripción de la imagen 3'
    },
    {
      src: '../../../assets/images/diseño-web-min.jpg',
      alt: 'Proyecto 4',
      title: 'Proyecto 4',
      description: 'Descripción de la imagen 4'
    },
    {
      src: '../../../assets/images/fotografia-min.jpg',
      alt: 'Proyecto 5',
      title: 'Proyecto 5',
      description: 'Descripción de la imagen 5'
    },
    {
      src: '../../../assets/images/maketing-digital-min.jpg',
      alt: 'Proyecto 6',
      title: 'Proyecto 6',
      description: 'Descripción de la imagen 6'
    },

    // Agrega más objetos para más imágenes del carrusel
  ];
}
