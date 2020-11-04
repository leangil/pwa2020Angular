import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(environment.endpointApi+"productos",{
      headers:{
        "x-access-token":localStorage.getItem("token")
      }
    })
    
  }
}
