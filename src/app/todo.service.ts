import { Injectable, Input } from '@angular/core';
import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/toPromise';

import { Http, Response } from '@angular/http';
import { Todos } from './todos';


@Injectable()
export class TodoService {
  constructor(private http: Http) { }

  getTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
      .map((response: Response) => response.json())
  }

  /*getTodos(): Promise<Todos[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
      .toPromise()
      .then(response => response.json() as Todos[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
}
