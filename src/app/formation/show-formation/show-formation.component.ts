import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-show-formation',
  templateUrl: './show-formation.component.html',
  styleUrls: ['./show-formation.component.scss']
})
export class ShowFormationComponent {
  formation!:Formation;
  sessions:Session[] = [];
  id!:number;

  constructor( private service:FormationService,
               public authService:AuthenticationService,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (formation) => {
        this.formation = formation;
        this.sessions = formation.sessions;
        // alert(JSON.stringify(formation));
      }, 
      error: err => {
        console.log(err);
      }
    });
  }


  handleShowSession(session:Session) {

  }


  handleEditSession(session:Session) {

  }

  handleDeleteSession(session:Session) {

  }

}
