import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation.model';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations:Formation[] = [];

  constructor(private formationService:FormationService) {}

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations() {
    this.formationService.getFormations().subscribe({
      next: data => {
        console.log(data);
        // console.log(JSON.stringify(data));
        this.formations = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
