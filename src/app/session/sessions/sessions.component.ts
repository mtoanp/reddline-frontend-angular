import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
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
        // this.formation = formation;
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
