import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions:Session[] = [];
  session!:Session;
  id!:number;

  constructor( private formationService:FormationService,
               private service:SessionService,
               public authService:AuthenticationService,
               public router:Router,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.formationService.getById(this.id).subscribe({
      next: (formation) => {
        this.sessions = formation.sessions;
        // alert(JSON.stringify(session));
      }, 
      error: err => {
        console.log(err);
      }
    });
  }

  handleShowSession(session:Session) {
    this.router.navigateByUrl(`api/sessions/${session.id}`);
  }

  handleNewSession() {
    this.router.navigateByUrl("api/admin/newSession");
  }

  handleEditSession(session:Session) {
    this.router.navigateByUrl(`api/admin/editSession/${session.id}`);
  }

  handleDeleteSession(session:Session) {
    let conf = confirm("Are you sure ? ");
    if (conf==false) return;

    this.service.delete(session).subscribe({
      next: value => {
        console.warn("deleted");
        this.sessions = this.sessions.filter(p => p.id != session.id);
      }, 
      error: err => {
        console.warn(err);
      }
    })
  }
}
