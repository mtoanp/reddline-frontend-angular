import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from '../model/candidature.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  host:string = "http://localhost:8080/api";
  base:string = "candidatures";

  constructor(private http:HttpClient) { }

  addCandidature(candidature:Candidature):Observable<Candidature> {
    return this.http.post<Candidature>(`${this.host}/${this.base}`, candidature);
  }

}
