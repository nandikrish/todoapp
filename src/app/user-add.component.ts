import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Users } from './users';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
})
export class UserAddComponent {
  @Input() user: Users[] = [];

  constructor(private userService: UserService) { }

  onSubmit(user: Users) {
    //console.log(user);
   var status= this.userService.addUser(user);
   console.log(status);
  }

}
