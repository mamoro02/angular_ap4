import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = "My Title";
  @Input() photo: string = "Photo"
  @Input() modal: string = "modal";
  @Output() closeModal = new EventEmitter<string>();

  public onCloseModal() : void{
    this.closeModal.emit('modal');
  }

}
