import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-pescados',
  standalone: true,
  imports: [ArticleComponent, CardComponent, ModalComponent, NgStyle],
  templateUrl: './pescados.component.html',
  styleUrl: './pescados.component.css'
})
export class PescadosComponent {
  public title: string = '';
  public photo: string = '';
  public description: string = '';

  public fish: { title: string; description: string; photo: string }[] = [
    {
      title: "Rodaballo",
      description: 'Lechugas frescas del día',
      photo: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107521488.jpg"
    },
    {
      title: "Rape",
      description: 'Rape del Cantábrico',
      photo: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107530435.jpg"
    },
    {
      title: "Mero",
      description: 'Mero del Mediterráneo',
      photo: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107493872.jpg'
    },
    {
      title: "Bonito",
      description: 'Bonito del Norte',
      photo: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107503223.jpg'
    },
    {
      title: "Lubina",
      description: 'Lubina de estero',
      photo: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107517092.jpg'
    },
    {
      title: "San Martín",
      description: 'Pez de San Pedro',
      photo: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107498663.jpg'
    },
  ];

  public onClick(info: { title: string, photo: string }): void {
    this.title=info.title;
    this.photo=info.photo
    
    alert(this.title);
    alert(this.photo);

    this.fish.forEach(data => {
      if (data.title === info.title) {
        this.description=data.description;
        alert(this.description);
      }
    });
  }

}
