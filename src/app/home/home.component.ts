import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero;
  mensaje="";
  constructor() { 
  }
  adivinar(){
    if(this.numero==5){
      //Gano
      this.mensaje="Ganaste!"
    }else if(this.numero>5){
      this.mensaje="Coloca un numero menor"

    }else{
      this.mensaje="Coloca un numero mayor"
    }
  }
  ngOnInit(): void {
  }

}
