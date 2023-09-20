import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  host:string = "http://localhost:8080/api";
  base:string = "etudiants";

  constructor(private http:HttpClient) { }

  getAll():Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.host}/${this.base}`);
  }

  getById(id:number):Observable<Etudiant> {
    return this.http.get<Etudiant>
    (`${this.host}/${this.base}/${id}`);
  }

  delete(etudiant:Etudiant) {
    return this.http.delete<any>(`${this.host}/${this.base}/${etudiant.id}`);
  }
  
  save(etudiant:Etudiant):Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.host}/${this.base}`, etudiant);
  }

  update(etudiant: Etudiant) {
    return this.http.put<Etudiant>(`${this.host}/${this.base}`, etudiant);
  }

  search(keyword:string):Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(`${this.host}/${this.base}/search=${keyword}`);
  }

}
