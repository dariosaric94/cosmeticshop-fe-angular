import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent implements OnInit {
  @Input() recepie: Recepie;

  constructor(private recepieService: RecepieService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recepieService.addIngredientsToShoppingList(this.recepie.ingredients);
  }
}
