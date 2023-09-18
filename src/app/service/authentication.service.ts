import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, throwError, of } from 'rxjs';
import { AppUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users : AppUser[]=[];
  authenticatedUser:AppUser | undefined;
  
  constructor() { 
    // this.users.push();
    // for (let i=0 ; i<10 ; i++){
      this.users.push({id:UUID.UUID(), username:"admin",password:"123",roles:["USER","ADMIN"]});
      this.users.push({id:UUID.UUID(), username:"user",password:"123",roles:["USER"]});
      this.users.push( {id:UUID.UUID(), username:"user2",password:"123",roles:["USER"]});
  //  }
  }


  public login(username:string, password:string):Observable<AppUser> {
    let appUser =  this.users.find(u => {return u.username == username });
    if(!appUser) return throwError( () => new Error("User not found"));
    if (appUser.password != password )return throwError( () => new Error("Bad credentials "));
    return of (appUser);
  }

  public authenticateUser(appUser : AppUser): Observable<boolean> { 
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({username:appUser.username, roles:appUser.roles, jwt: "JWT_TOKEN" }));
    return of(true);
  }

  public hasRole(role:string):boolean {
    return this.authenticatedUser!.roles.includes("ADMIN"); 
  }

  isAuthenticated() {
    this.authenticatedUser = this.isStored();
    return this.authenticatedUser != undefined; 
  }

  isStored():any {
    return localStorage.getItem('authUser')  || undefined;
    // return JSON.parse(localStorage.getItem('authUser')  || '{}');
  }

  public logout(): Observable<boolean> {
    this.authenticatedUser = undefined;
    localStorage.removeItem("authUser" );
    return of(true);
  }
}
