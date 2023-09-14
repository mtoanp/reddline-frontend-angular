import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant.model';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants:Etudiant[] = [];
  
  constructor(private etudiantService:EtudiantService, private router:Router) {}

  ngOnInit(): void {
      this.getAll();
  }

  getAll() {
    this.etudiantService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.etudiants = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleNewEtudiant() {
    this.router.navigateByUrl("api/newEtudiant");
  }

  handleEditEtudiant(product:Etudiant) {
    this.router.navigateByUrl(`api/editEtudiant/${product.id}`);
  }

  handleDeleteEtudiant(product:Etudiant) {
    this.etudiantService.delete(product).subscribe({
      next: value => {
        this.etudiants = this.etudiants.filter(p => p.id != product.id);
      }
    })
  }

  searchEtudiants(keyword:string) {
    this.etudiantService.search(keyword).subscribe({
      next: data => {
        this.etudiants = data;
      }
    })
  }

}
