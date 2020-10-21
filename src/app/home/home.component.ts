import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos=[
    {
      id:1,
      name:"Moto X",
      price:1000
    },
    {
      id:2,
      name:"Moto G",
      price:1500
    }
  ];
  constructor() { 
  }
  ngOnInit(): void {
  }

}
