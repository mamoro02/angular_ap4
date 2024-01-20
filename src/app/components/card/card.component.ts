import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "My Title";
  @Input() photo: string = "My Photo";
  @Output() info = new EventEmitter<{ title: string, photo: string }>();

  public onClick(): void {
    this.info.emit({ title: this.title, photo: this.photo })
  }
}
