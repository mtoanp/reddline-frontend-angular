import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  host:string = "http://localhost:8080/api";
  base:string = "sessions";

  constructor(private http:HttpClient) { }

  getAll():Observable<Session[]> {
    return this.http.get<Session[]>(`${this.host}/${this.base}`);
  }

  getById(id:number):Observable<Session> {
    return this.http.get<Session>
    (`${this.host}/${this.base}/${id}`);
  }

  delete(obj:Session) {
    return this.http.delete<any>(`${this.host}/${this.base}/${obj.id}`);
  }
  
  save(obj:Session):Observable<Session> {
    return this.http.post<Session>(`${this.host}/${this.base}`, obj);
  }

  update(obj: Session) {
    return this.http.put<Session>(`${this.host}/${this.base}/${obj.id}`, obj);
  }

  search(keyword:string):Observable<Array<Session>> {
    return this.http.get<Array<Session>>(`${this.host}/${this.base}?search=${keyword}`);
  }
}
