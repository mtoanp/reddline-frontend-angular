import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { Theme } from 'src/app/model/theme.model';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  catalogue!:Theme;

  constructor(private themeService:ThemeService, private router:Router) {}
  
  ngOnInit(): void {
      this.getCatalogue();
  }

  getCatalogue() {
    this.themeService.getCatalogue().subscribe({
      next: data => {
        console.log(JSON.stringify(data));
        this.catalogue = data;
        // console.log(this.catalogue.id);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleShowFormation(formation:Formation) {
    this.router.navigateByUrl(`api/formations/${formation.id}`);
  }
}
