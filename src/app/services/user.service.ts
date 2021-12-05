 import { Injectable} from '@angular/core';
 import {BehaviorSubject} from 'rxjs';

 @Injectable()
 export class UsersService{
   constructor(){}
   private user = new BehaviorSubject<string>('john');
   castUser = this.user.asObservable();
   
   editUser(newUser){
     this.user.next(newUser); 
   }
 }