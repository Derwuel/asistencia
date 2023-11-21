import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  usuarios: any = [];

  constructor(
    private http: HttpClient
  ) { }

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

}
