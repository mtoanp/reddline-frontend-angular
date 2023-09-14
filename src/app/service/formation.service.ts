import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  getFormations():Observable<Formation[]> {
    return this.http.get<Formation[]>("http://localhost:8080/api/formations");
  }
}
