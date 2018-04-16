import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Domo, IDomos, DomoStatus } from '../data-model';
// import { DomoStatus } from '../domostatus';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  @Input() domo: DomoStatus;
  _domosArray: IDomos[];
  _estados = [{'status': true, 'etiqueta': 'Ocupado'},
              {'status': false, 'etiqueta': 'Disponible'}];
  domoUpdateForm = new FormGroup ({
    idForm: new FormControl(),
    estadoForm: new FormControl()
  });
  id: string;
  estado: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService) {
    this.recuperarDomosFromApi();
  }

  recuperarDomosFromApi(): void {
    this.apiService.getDomos()
        .subscribe(
            resultArray => this._domosArray = resultArray,
            error => console.log('Error :: ' + error)
        );
  }

  actualizarEstadoDomo(domo): void {
    this.apiService.updateDomo(domo)
        .subscribe(
          data => {
            console.log('creando registro en db');
            return true;
            },
            error => console.log('Error :: ' + error)
        );
  }

  ngOnInit() {
    console.log(JSON.stringify(this._estados));
  }

  onSubmit() {
    this.actualizarEstadoDomo({'domoId': this.id, 'status': this.estado});
  }
}
