import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../model/salle.model';

@Injectable({
  providedIn: 'root'
})

export class SalleService {
  base:string = "salles";

  constructor(private http:HttpClient) { }

  getAll():Observable<Salle[]> {
    return this.http.get<Salle[]>(`http://localhost:8080/api/${this.base}`);
  }

  getById(id:number):Observable<Salle> {
    return this.http.get<Salle>
    (`http://localhost:8088/${this.base}/${id}`);
  }

  delete(obj:Salle) {
    return this.http.delete<any>(`http://localhost:8088/api/${this.base}/${obj.id}`);
  }
  
  save(obj:Salle):Observable<Salle> {
    return this.http.post<Salle>(`http://localhost:8088/api/${this.base}`, obj);
  }

  update(obj: Salle) {
    return this.http.put<Salle>(`http://localhost:8088/api/${this.base}/${obj.id}`, obj);
  }

  search(keyword:string):Observable<Array<Salle>> {
    return this.http.get<Array<Salle>>(`http://localhost:8088/api/${this.base}?name_like=${keyword}`);
  }

}
