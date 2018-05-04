import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { IDomos } from '../data-model';
import { ApiService } from '../api.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';


@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit {

  domos: IDomos[];
  displayedColumns = ['domoId', 'ubicacionBrief', 'status'];
  dataSource = new RegistroDataSource(this.apiService);

  constructor(
    // private messageService: MessageService,
    private apiService: ApiService) { }

  ngOnInit() {
    // this.getTodos();
   }

  getTodos() {}
// utilizar como ejemplo https://stackblitz.com/angular/oadqdmvjror?file=src%2Fapp%2Fhero-list%2Fhero-list.component.ts
}

export class RegistroDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }
  connect(): Observable<IDomos[]> {
    return this.apiService.getDomos();
  }
  disconnect() { }
}
