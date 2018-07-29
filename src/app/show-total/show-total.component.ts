import { Component, OnInit } from '@angular/core';
import { TotalizerService } from '../services/totalizer.service';

@Component({
  selector: 'show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent implements OnInit {
  total = 0;
  constructor(private totalizer: TotalizerService) { }

  ngOnInit() {
    // this.totalizer.subscribe(function (total) { this.total = total; }.bind(this));
    this.totalizer.subscribe((total) => this.total = total);
  }

}
