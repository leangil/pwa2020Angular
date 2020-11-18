import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import {  FileUploader } from 'ng2-file-upload';//Incluir
import { CategoriasService } from 'src/app/services/categorias.service';
const URL = 'http://localhost:3000/productos/upload';
@Component({
  selector: 'app-productos-alta',
  templateUrl: './productos-alta.component.html',
  styleUrls: ['./productos-alta.component.css']
})

export class ProductosAltaComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL,
    headers: [{ name: 'x-access-token', value: localStorage.getItem("token") }], itemAlias: 'photo'});
  myForm:FormGroup;
  categorias=<any>[];
  constructor(
    private fb:FormBuilder,
    private productosService:ProductosService,
    private categoriasService:CategoriasService) { 
    this.myForm=this.fb.group({
      name:["",[Validators.required]],
      sku:["",[Validators.required]],
      description:["",[Validators.required]],
      price:["",[Validators.required]],
      quantity:["",[Validators.required]],
      category:["",[Validators.required]],
      tags:["",[Validators.required]],
      images:["",[Validators.required]]
    })

    this.categoriasService.getAll()
    .subscribe(data=>{
      console.log(data);
      this.categorias=data;
    })
  }
  
  guardar(){
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item:any,response:any,status:any,headers:any) =>{
      console.log("onCompleteItem",item,status,response)
      const jsonResponse = JSON.parse(response);
      this.myForm.get('images').setValue(jsonResponse["data"])
      this.productosService.create(this.myForm.value)
      .subscribe(response=>{
        console.log(response);
      })
    }
  }
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}

