import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos=[];
  constructor(private prdServ:ProductosService) { 
   this.prdServ.getAll()
   .subscribe(data=>{
    console.log("Data",data)
    this.productos=data["docs"];
   },
   err=>{
     console.log("err",err)
   })
  }
  ngOnInit(): void {
  }

}
