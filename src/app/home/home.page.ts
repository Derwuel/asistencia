import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  usuarios: any = [];
  formulariologin: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {
    this.formulariologin = this.fb.group({
      "nombre" : new FormControl("", Validators.required),
      "password" : new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    this.getalumnos().subscribe(res=>{
      console.log("res",res)
      this.usuarios = res;
    });
  }

  getalumnos(){
    return this.http
    .get("assets/files/gente.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
      )
    }

  async Ingresar() {
    var f = this.formulariologin.value;
    var u = this.usuarios;
    if(u.nombre == f.nombre && u.password == f.password){
      console.log("ingresado");
    }else{
      console.log("datos incorectos");
    }
  }

}
