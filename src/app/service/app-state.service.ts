import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public msg:any;
  public authState:any = {
    isAuthenticated : false,
    username : undefined,
    roles : undefined,
    token : undefined
  }
  constructor() { }

  public setAuthState(state : any) :void {
    this.authState = {...this.authState, ...state};
  }

  public setMessage(msg : any) :void {
    this.msg = msg;
  }
}
