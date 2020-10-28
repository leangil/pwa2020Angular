import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private usrServ:UsuariosService) { 
    this.myForm=this.fb.group({
      email:["",[Validators.required,Validators.minLength(3)]],
      password:["",[Validators.required]]
    })
  }
  login(){
    console.log(this.myForm.get("email"))
    this.usrServ.login(this.myForm.get("email").value,this.myForm.get("password").value)
    .subscribe(
      data=>{
        console.log("Success",data)
        if(data["token"]){
          alert("Login exitoso");
          localStorage.setItem("token",data["token"]);
        }else{
          alert(data["message"]);
        }
      },
      err=>{
        console.log("Error",err)
      }
    )
  }
  ngOnInit(): void {
  }

}
