import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Domo } from '../data-model';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  @Input() domo: Domo;
  options: FormGroup;
  // domoId: string;

  domoForm = new FormGroup ({
    domoId: new FormControl(),
    totemParent: new FormControl(),
    ubicacionBrief: new FormControl(),
    lat: new FormControl(),
    long: new FormControl()
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private api: ApiService) {
    this.createForm();
    // this.options = fb.group({
    //   hideRequired: false,
    //   floatLabel: 'auto',
    // });
  }

  createForm() {
    this.domoForm = this.fb.group({
      domoId: '',
      totemParent: '',
      ubicacionBrief: '',
      lat: 0,
      long: 0
    });
  }

  ngOnInit() { }

  crearDomo(registro) {
    let body: string;
    body = JSON.stringify(registro);
    console.log(body);
    return this.http.post('http://localhost:3005/api/Domo', body, httpOptions);
  }

  obtenerDomo(): Domo {
    const formModel = this.domoForm.value;
      const saveDomo: Domo = {
        domoId: formModel.domoId as string,
        totemParent: formModel.totemParent as string,
        ubicacionBrief: formModel.ubicacionBrief,
        lat: formModel.lat,
        long: formModel.long,
      };
      return saveDomo;
    }

  rebuildForm() {
    this.domoForm.reset({
      domoId: ' ',
      totemParent: ' ',
      ubicacionBrief: ' ',
      lat: '0',
      long: '0'
    });
  }

  onSubmit() {
  this.domo = this.obtenerDomo();
  this.crearDomo(this.domo).subscribe(
      data => {
        return true;
      },
      error => {
        console.error('Error creando registro');
        return Observable.throw(error);
      }
    );
  this.rebuildForm();
  }
}
