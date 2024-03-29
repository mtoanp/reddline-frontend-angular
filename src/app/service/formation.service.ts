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

  delete(formation:Formation) {
    return this.http.delete<any>(`${this.host}/${this.base}/${formation.id}`);
  }
  
  save(formation:Formation):Observable<Formation> {
    return this.http.post<Formation>(`${this.host}/${this.base}`, formation);
  }

  update(formation: Formation) {
    return this.http.put<Formation>(`${this.host}/${this.base}`, formation);
  }

  search(keyword:string):Observable<Array<Formation>> {
    return this.http.get<Array<Formation>>(`${this.host}/${this.base}/search=${keyword}`);
  }
}
