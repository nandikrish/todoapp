import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { Users } from './users';

@Injectable()
export class UserService {

  constructor(private http:Http) {}

/******* from udemy  *******/
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map((response: Response) => response.json())
  }

  addUser(user:Users){
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    //console.log(body);
    return this.http.post('https://myfirstapp-f40a6.firebaseio.com/users.json', body, {headers: headers});
  }

/******** from angular developer *******/
  /*getUsers(): Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(response => response.json() as Users[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/

  

}
