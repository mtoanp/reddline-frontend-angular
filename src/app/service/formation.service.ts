import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  host:string = "http://localhost:8080/api";
  base:string = "formations";

  constructor(private http:HttpClient) { }

  getAll():Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.host}/${this.base}`);
  }

  getById(id:number):Observable<Formation> {
    return this.http.get<Formation>
    (`${this.host}/${this.base}/${id}`);
  }

  delete(obj:Formation) {
    return this.http.delete<any>(`${this.host}/${this.base}/${obj.id}`);
  }
  
  save(obj:Formation):Observable<Formation> {
    return this.http.post<Formation>(`${this.host}/${this.base}`, obj);
  }

  update(obj: Formation) {
    return this.http.put<Formation>(`${this.host}/${this.base}/${obj.id}`, obj);
  }

  search(keyword:string):Observable<Array<Formation>> {
    return this.http.get<Array<Formation>>(`${this.host}/${this.base}?search=${keyword}`);
  }
}
