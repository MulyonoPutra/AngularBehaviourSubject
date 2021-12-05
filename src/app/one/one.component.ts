import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/user.service';
@Component({
  selector: 'my-one',
  templateUrl: './one.component.html',
  styleUrls: [ './one.component.css' ]
})
export class OneComponent implements OnInit {
  constructor(private userService: UsersService){}
  name = 'Angular';
  user:string;
  newUser:string;
  ngOnInit(){
    this.userService.castUser.subscribe(user => this.user = user);
  }
  editedUser(user:string){
    this.userService.editUser(this.newUser);
  }
}