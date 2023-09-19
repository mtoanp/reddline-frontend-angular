import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant.model';
import { AppStateService } from 'src/app/service/app-state.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants:Etudiant[] = [];
  keyword:string = "";
  totalPages:number = 1;
  paseSize:number = 3;
  currentPage:number = 1;
  // isAdmin:boolean = false;
  
  constructor(private etudiantService:EtudiantService,
              public authService:AuthenticationService, 
              public appState:AppStateService,
              private router:Router) {}

  ngOnInit(): void {
      this.getAll();
      // this.isAdmin = this.appState.authState.roles.includes('ADMIN');
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

  handleEditEtudiant(etudiant:Etudiant) {
    this.router.navigateByUrl(`api/admin/editEtudiant/${etudiant.id}`);
  }

  handleDeleteEtudiant(etudiant:Etudiant) {
    let conf = confirm("Are you sure ? ");
    if (conf==false) return;

    this.etudiantService.delete(etudiant).subscribe({
      next: value => {
        console.warn("deleted");
        this.etudiants = this.etudiants.filter(p => p.id != etudiant.id);
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

  handleShowEtudiant(etudiant:Etudiant) {
    this.router.navigateByUrl(`api/admin/etudiants/${etudiant.id}`);
  }

}
