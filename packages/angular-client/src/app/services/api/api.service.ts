import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url): Observable<any> {
    return this.http
        .get(url)
        .pipe(
          map(res => this.handleResponse(res))
        )
  }

  delete(url): Observable<any> {
    return this.http
        .delete(url)
        .pipe(
          map(res => this.handleResponse(res))
        )
  }

  post(url, req) {
    return this.http
        .post(url, req)
        .pipe(
          map(res => this.handleResponse(res))
        )
  }

  put(url, req) {
    return this.http
        .put(url, req)
        .pipe(
          map(res => this.handleResponse(res))
        )
  }


  handleResponse(res) {
    console.log("receieved res", res);
    return res;
  }

  handleError(err) {
    console.log("received err", err);
    return Observable.throw(err);
  }
}
