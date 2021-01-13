import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  action = () => {
    console.log("nesto");
    this.router.navigate(["ligadetalji"]);
  }
}
