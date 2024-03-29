import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/model/theme.model';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  themes:Theme[] = [];

  constructor(private themeService:ThemeService) {}
  
  ngOnInit(): void {
      this.getThemes();
  }

  getThemes() {
    this.themeService.getThemes().subscribe({
      next: data => {
        console.log(data);
        // console.log(JSON.stringify(data));
        this.themes = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
