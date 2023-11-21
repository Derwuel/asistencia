import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    private http: HttpClient
  ) {
    this.formulariologin = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    this.getAlumnos().subscribe(res => {
      console.log("res", res)
      this.usuarios = res;
    });
  }

  getAlumnos() {
    return this.http
      .get("assets/files/gente.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  Ingresar() {
    var f = this.formulariologin.value;
    var usuarioEncontrado = this.usuarios.find((u: { nombre: any; password: any; }) => u.nombre === f.nombre && u.password === f.password);

    if (usuarioEncontrado) {
      console.log("Ingresado");
    } else {
      console.log("Datos erróneos");
    }
  }
}
