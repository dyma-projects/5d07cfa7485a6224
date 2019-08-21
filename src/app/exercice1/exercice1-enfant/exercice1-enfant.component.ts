import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

@Input() public compteur: number;
@Output() public incrementCounter: EventEmitter<number> = new EventEmitter<number>();
@Output() public decrementCounter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

incrementCounterChild(currentValue: number) {
  this.incrementCounter.emit();
}

decrementCounterChild() {
  this.decrementCounter.emit();
}





}
