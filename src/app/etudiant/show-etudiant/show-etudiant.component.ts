import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant.model';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.scss']
})
export class ShowEtudiantComponent implements OnInit {

  etudiant!:Etudiant;
  id!:number;

  constructor( private service:EtudiantService,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (etudiant) => {
        this.etudiant = etudiant;
      }, 
      error: err => {
        console.log(err);
      }
    });
  }

}
