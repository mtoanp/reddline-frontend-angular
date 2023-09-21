import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  save(candidature:Candidature):Observable<Candidature> {
    return this.http.post<Candidature>(`${this.host}/${this.base}`, candidature);
  }

  update(candidature: Candidature) {
    return this.http.put<Candidature>(`${this.host}/${this.base}`, candidature);
  }
  
  patch(candidature: Candidature):Observable<Candidature> {
    return this.http.patch<Candidature>(`${this.host}/${this.base}/${candidature.idSession}`, {valide:!candidature.valide});
  }
  
  delete(candidature:Candidature) {
    const header: HttpHeaders = new HttpHeaders()
    const options = {
      headers: header,
      body: candidature
      // body: JSON.stringify(candidature)
    };
    return this.http.delete<any>(`${this.host}/${this.base}`, options);
    // return this.http.delete<any>(`${this.host}/${this.base}`, {body: candidature});
    // return this.http.delete<any>(`${this.host}/${this.base}/delete?idSession=${candidature.idSession}&idEtudiant=${candidature.idEtudiant}`);
  }
  
}
