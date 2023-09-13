import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../model/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http:HttpClient) { }

  getCatalogue():Observable<Theme> {
    return this.http.get<Theme>("http://localhost:8080/api/themes/catalogue");
  }

  getThemes():Observable<Theme[]> {
    return this.http.get<Theme[]>("http://localhost:8080/api/themes");
  }
}
