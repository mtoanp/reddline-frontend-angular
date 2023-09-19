import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { AppStateService } from 'src/app/service/app-state.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations:Formation[] = [];
  keyword:string = "";
  totalPages:number = 1;
  paseSize:number = 3;
  currentPage:number = 1;

  constructor(private formationService:FormationService,
    public authService:AuthenticationService, 
    public appState:AppStateService,
    private router:Router) {}

    ngOnInit(): void {
      this.getAll();
      // this.isAdmin = this.appState.authState.roles.includes('ADMIN');
  }

  getAll() {
    this.formationService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.formations = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleNewFormation() {
    this.router.navigateByUrl("api/admin/newFormation");
  }

  handleEditFormation(formation:Formation) {
    this.router.navigateByUrl(`api/admin/editFormation/${formation.id}`);
  }

  handleDeleteFormation(formation:Formation) {
    let conf = confirm("Are you sure ? ");
    if (conf==false) return;

    this.formationService.delete(formation).subscribe({
      next: value => {
        console.warn("deleted");
        this.formations = this.formations.filter(p => p.id != formation.id);
      }, 
      error: err => {
        console.warn(err);
      }
    })
  }

  searchFormations(keyword:string) {
    this.formationService.search(keyword).subscribe({
      next: data => {
        this.formations = data;
      }
    })
  }

  handleShowFormation(formation:Formation) {
    this.router.navigateByUrl(`api/formations/${formation.id}`);
  }
}
