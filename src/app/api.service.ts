import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IDomos, Domo, DomoStatus} from './data-model';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class ApiService {

  private _URL = 'http://localhost:3005/api/';

  constructor(private http: Http) {
  }

  getDomos(): Observable<IDomos[]> {
      return this.http
          .get(this._URL + '/All')
          .map((response: Response) => {
              return <IDomos[]>response.json();
          })
          .catch(this.handleError);
  }

  public updateDomo(domo: DomoStatus): Observable<DomoStatus> {
    return this.http
      .put(this._URL + '/Domo/' + domo.domoId, domo)
      .map((response: Response) => {
        return <DomoStatus>response.json();
      })
      .catch(this.handleError);
  }

//   actualizarEstadoDomo(domo: DomoStatus): Observable<DomoStatus> {
//     httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
//     return this.http.put<DomoStatus>(this._URL + '/Domo/IDomos.domoId', domo, httpOptions)
//         .pipe(
//             catchError(this.handleError('updateHero', hero))
//         );
// }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
