import { Component, OnInit } from '@angular/core';
import { TotalizerService } from '../services/totalizer.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
  clicksCount = 0;

  constructor(private totalizer: TotalizerService) { }

  increaseCounter() {
    this.clicksCount++;
  }

  increaseTotal() {
    this.totalizer.increaseTotal();
  }

}
