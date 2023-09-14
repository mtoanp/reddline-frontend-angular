import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  base:string = "etudiants";

  constructor(private http:HttpClient) { }

  getAll():Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`http://localhost:8080/api/${this.base}`);
  }

  getById(id:number):Observable<Etudiant> {
    return this.http.get<Etudiant>
    (`http://localhost:8088/${this.base}/${id}`);
  }

  delete(obj:Etudiant) {
    return this.http.delete<any>(`http://localhost:8088/api/${this.base}/${obj.id}`);
  }
  
  save(obj:Etudiant):Observable<Etudiant> {
    return this.http.post<Etudiant>(`http://localhost:8088/api/${this.base}`, obj);
  }

  update(obj: Etudiant) {
    return this.http.put<Etudiant>(`http://localhost:8088/api/${this.base}/${obj.id}`, obj);
  }

  search(keyword:string):Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(`http://localhost:8088/api/${this.base}?name_like=${keyword}`);
  }

}
