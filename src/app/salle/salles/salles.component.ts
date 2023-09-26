import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/model/salle.model';
import { AppStateService } from 'src/app/service/app-state.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss']
})
export class SallesComponent {
  salles :Salle[] = [];
  keyword:string = "";
  totalPages:number = 1;
  paseSize:number = 3;
  currentPage:number = 1;
  // isAdmin:boolean = false;
  constructor(private salleService:SalleService,
    public authService:AuthenticationService, 
    public appState:AppStateService,
    private router:Router) {}
    ngOnInit(): void {
      this.getAll();
      // this.isAdmin = this.appState.authState.roles.includes('ADMIN');
  }
  getAll() {
    this.salleService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.salles = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleNewSalle() {
    this.router.navigateByUrl("api/admin/newSalle");
  }

  handleEditSalle(salle:Salle) {
    this.router.navigateByUrl(`api/admin/editSalle/${salle.id}`);
  }

  handleDeleteSalle(salle:Salle) {
    let conf = confirm("Are you sure ? ");
    if (conf==false) return;

    this.salleService.delete(salle).subscribe({
      next: value => {
        console.warn("deleted");
        this.salles = this.salles.filter(s => s.id != salle.id);
      }, 
      error: err => {
        console.warn(err);
      }
    })
  }

  searchSalles(keyword:string) {
    this.salleService.search(keyword).subscribe({
      next: data => {
        this.salles = data;
      }
    })
  }

  handleShowSalle(salle:Salle) {
    this.router.navigateByUrl(`api/admin/salles/${salle.id}`);
  }

}
