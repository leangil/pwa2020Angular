import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  routes:string="users/";
  constructor(private http:HttpClient) { }
  create(datos){
    return this.http.post(environment.endpointApi+this.routes+"web/registro",datos)
  }
  login(email:string,password:string){
    return this.http.post(environment.endpointApi+this.routes+"web/login",{
      email:email,
      password:password
    })
  }
}
