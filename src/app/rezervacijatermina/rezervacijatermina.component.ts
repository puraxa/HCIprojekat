import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rezervacijatermina',
  templateUrl: './rezervacijatermina.component.html',
  styleUrls: ['./rezervacijatermina.component.scss']
})
export class RezervacijaterminaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  date;
  dateBool:boolean = false;
  termini:Array<number> = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  tempRezervisani:Array<number> = [];
  rezervisaniTermini:Array<number>=[];
  isDate = () => {
    return this.dateBool;
  }
  dodajRezervisani = (i:number):void => {
    if(this.rezervisaniTermini.indexOf(i)>-1){
      alert("Termin rezervisan");
      return;
    }
    console.log(this.date);
    this.tempRezervisani.push(i);
  }
  isTempRezervisan = (i:number):boolean => {
    return this.tempRezervisani.indexOf(i) < 0 ? false : true;
  }
  isRezervisan = (i:number):boolean =>{
    return this.rezervisaniTermini.indexOf(i) < 0 ? false : true;
  }
  rezervisi = ():void =>{
    if(this.date==undefined){
      this.dateBool = true;
      alert("Datum nije odabran");
      return;
    }
    this.dateBool = true;
    for (let i = 0; i < this.tempRezervisani.length; i++) {
      const element = this.tempRezervisani[i];
      if(this.rezervisaniTermini.indexOf(element) < 0) this.rezervisaniTermini.push(element);
      
    }
    alert("Uspjesno rezervisani termini");  
  }
}
