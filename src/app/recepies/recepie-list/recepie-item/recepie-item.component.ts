import { Component, Input } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css',
})
export class RecepieItemComponent {
  @Input() recepie: Recepie;

  constructor(private recepieService: RecepieService) {}

  onSelected() {
    this.recepieService.recepieSelected.emit(this.recepie);
  }
}
