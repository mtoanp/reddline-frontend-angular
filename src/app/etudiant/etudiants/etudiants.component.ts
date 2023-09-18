import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant.model';
import { AppStateService } from 'src/app/service/app-state.service';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants:Etudiant[] = [];
  // isAdmin:boolean = false;
  
  constructor(private etudiantService:EtudiantService, 
              public appState:AppStateService,
              private router:Router) {}

  ngOnInit(): void {
      this.getAll();
      // this.isAdmin = this.appState.authState.roles.includes('ADMIN');
  }

  isAdmin():boolean {
    if(this.appState.authState.roles == undefined) {
      return false;
    } else {
      return this.appState.authState.roles.includes('ADMIN');
    }
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
    this.router.navigateByUrl("api/admin/newEtudiant");
  }

  handleEditEtudiant(product:Etudiant) {
    this.router.navigateByUrl(`api/admin/editEtudiant/${product.id}`);
  }

  handleDeleteEtudiant(product:Etudiant) {
    let conf = confirm("Are you sure ? ");
    if (conf==false) return;

    this.etudiantService.delete(product).subscribe({
      next: value => {
        console.warn("deleted");
        this.etudiants = this.etudiants.filter(p => p.id != product.id);
      }, 
      error: err => {
        console.warn(err);
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
