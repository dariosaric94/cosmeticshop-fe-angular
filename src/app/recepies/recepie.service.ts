import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecepieService {
  public recepieSelected = new EventEmitter<Recepie>();

  private recepies: Recepie[] = [
    new Recepie(
      'A Test Recepie',
      'This is simply a test',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-05-jessica-alba-turkey-meatballs-recipe-review%2Fjessica-alba-turkey-meatballs-recipe-review-1656-lead',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recepie(
      'A Test Recepie 2',
      'Another Text',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-05-jessica-alba-turkey-meatballs-recipe-review%2Fjessica-alba-turkey-meatballs-recipe-review-1656-lead',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecepies() {
    // returns a coppy of recepies and we realy cant access to the original
    // returning slice without dependencies returns a copy of private recepies
    return this.recepies.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
