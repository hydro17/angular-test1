import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalizerService {
  private sum = 0;
  private subscribedFunction: Function;

  constructor() { }

  increaseTotal(): void {
    console.log('Sum:' + this.sum);
    this.sum++;
    this.subscribedFunction(this.sum);
  }

  subscribe(funct: Function): void {
    this.subscribedFunction = funct;
  }
}
