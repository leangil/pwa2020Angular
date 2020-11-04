import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import {Producto,ProductosPaginator} from "../interfaces/Producto"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[]=[];
  loading:boolean|string=false;//: -> tipo de dato, = asignacion (inicializacion de la variable). | -> indicar mas de un tipo de dato
  prueba:"pepe"|"secondary" // Especifica que prueba solo puede tener valores "pepe" o "secondary"
  constructor(private prdServ:ProductosService) { 

   this.prdServ.getAll()
   .subscribe((data:ProductosPaginator)=>{
    console.log("Data",data)
    //Validar respuesta con express
    this.productos=data.docs;
   },
   err=>{
     console.log("err",err)
   })
  }
  ngOnInit(): void {
  }

}
