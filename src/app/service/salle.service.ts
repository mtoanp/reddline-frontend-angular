import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../model/salle.model';

@Injectable({
  providedIn: 'root'
})

export class SalleService {
  host:string = "http://localhost:8080/api";
  base:string = "salles";

  constructor(private http:HttpClient) { }

  getAll():Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.host}/${this.base}`);
  }

  getById(id:number):Observable<Salle> {
    return this.http.get<Salle>
    (`${this.host}/${this.base}/${id}`);
  }

  delete(obj:Salle) {
    return this.http.delete<any>(`${this.host}/${this.base}/${obj.id}`);
  }
  
  save(obj:Salle):Observable<Salle> {
    return this.http.post<Salle>(`http://localhost:8088/api/${this.base}`, obj);
  }

  update(obj: Salle) {
    return this.http.put<Salle>(`${this.host}/${this.base}/${obj.id}`, obj);
  }

  search(keyword:string):Observable<Array<Salle>> {
    return this.http.get<Array<Salle>>(`${this.host}/${this.base}?search=${keyword}`);
  }

}
