import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild ('dataEntry', {static: true}) public dataEntryInput: ElementRef;


  constructor() {
  }

  ngOnInit() {}


  displayData() {
    this.valeur = this.dataEntryInput.nativeElement.value;
  }




}
