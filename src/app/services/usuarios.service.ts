import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  create(datos){
    return this.http.post("http://localhost:3000/users/web/registro",datos)
  }
}
