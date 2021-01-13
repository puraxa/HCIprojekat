import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervacijatermina',
  templateUrl: './rezervacijatermina.component.html',
  styleUrls: ['./rezervacijatermina.component.scss']
})
export class RezervacijaterminaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  termini:Array<number> = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
}
