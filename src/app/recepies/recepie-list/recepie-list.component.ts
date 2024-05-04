import { Component, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css',
})
export class RecepieListComponent {
  @Output() recepieWasSelected = new EventEmitter<Recepie>();
  recepies: Recepie[] = [
    new Recepie(
      'A Test Recepie',
      'This is simply a test',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-05-jessica-alba-turkey-meatballs-recipe-review%2Fjessica-alba-turkey-meatballs-recipe-review-1656-lead'
    ),
    new Recepie(
      'A Test Recepie 2',
      'Another Text',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-05-jessica-alba-turkey-meatballs-recipe-review%2Fjessica-alba-turkey-meatballs-recipe-review-1656-lead'
    ),
  ];

  constructor() {}

  onRecepieSelected(recepie: Recepie) {
    this.recepieWasSelected.emit(recepie);
  }
}
