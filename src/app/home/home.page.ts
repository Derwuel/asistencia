import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  formulariologin: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulariologin = this.fb.group({
      "nombre" : new FormControl("", Validators.required),
      "password" : new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

}
