import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero;
  mensaje="";
  modificado=false;
  class_mensaje="";

  noticias=[
    {
      id:1,
      titulo:"Noticia",
      descripcion:"Noticia Desc"
    },
    {
      id:2,
      titulo:"Noticia 2",
      descripcion:"Noticia 2 Desc"
    }
  ];
  constructor() { 
  }
  adivinar(){
    this.noticias=[
      {
        id:3,
        titulo:"Noticia 3",
        descripcion:"Noticia 3 Desc"
      },
      {
        id:4,
        titulo:"Noticia 4",
        descripcion:"Noticia 4 Desc"
      },
      {
        id:5,
        titulo:"Noticia 5",
        descripcion:"Noticia 5 Desc"
      }
    ]
    if(this.numero==5){
      //Gano
      this.mensaje="Ganaste!"
      this.modificado=true;
      this.class_mensaje="gano";
    }else if(this.numero>5){
      this.mensaje="Coloca un numero menor"
      this.class_mensaje="perdio";
    }else{
      this.mensaje="Coloca un numero mayor"
      this.class_mensaje="perdio";
    }
  }
  ngOnInit(): void {
  }

}
