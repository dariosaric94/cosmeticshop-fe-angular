import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css',
  providers: [RecepieService],
})
export class RecepiesComponent implements OnInit {
  selectedRecepie: Recepie;

  constructor(private recepieService: RecepieService) {}

  ngOnInit(): void {
    this.recepieService.recepieSelected.subscribe((recepie: Recepie) => {
      this.selectedRecepie = recepie;
    });
  }
}
