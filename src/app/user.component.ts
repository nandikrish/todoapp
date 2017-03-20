import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Users } from './users';
@Component({
  selector: 'fa-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  users: Users[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.users = myArray;
      }
      );
      /*this.userService.getUsers().then(users => this.users = users);*/
  }

}
