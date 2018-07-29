import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  text = 'HiMM!';
  isSelected = false;
  inputText: string;

  constructor() { }

  change() {
    this.text = 'Hello!';
  }

  onInput($event) {
    // debugger;
    this.inputText = $event.target.value;
  }

  ngOnInit() {
  }

}
