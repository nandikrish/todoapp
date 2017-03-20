import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { UserComponent } from './user.component';
import { routing } from './app.routing';

import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { UserAddComponent } from './user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
