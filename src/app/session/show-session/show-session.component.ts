import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-show-session',
  templateUrl: './show-session.component.html',
  styleUrls: ['./show-session.component.scss']
})
export class ShowSessionComponent implements OnInit {
  formation!:Formation;
  session!:Session;
  // sessions:Session[] = [];
  id!:number;

  constructor( private formationService:FormationService,
               private sessionService:SessionService,
               public authService:AuthenticationService,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.sessionService.getById(this.id).subscribe({
      next: (session) => {
        this.session = session;
        // alert(JSON.stringify(session));
        this.formationService.getById(this.session.id).subscribe({
          next: formation => {this.formation = formation;}
        })
      }, 
      error: err => {
        console.log(err);
      }
    });
  }
}
