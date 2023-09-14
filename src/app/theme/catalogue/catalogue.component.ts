import { Component } from '@angular/core';
import { Theme } from 'src/app/model/theme.model';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  catalogue!:Theme;

  constructor(private themeService:ThemeService) {}
  
  ngOnInit(): void {
      this.getCatalogue();
  }

  getCatalogue() {
    this.themeService.getCatalogue().subscribe({
      next: data => {
        console.log(data);
        // console.log(JSON.stringify(data));
        this.catalogue = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
