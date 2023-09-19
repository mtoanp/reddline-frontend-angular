import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/model/cours.model';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormationService } from 'src/app/service/formation.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  constructor(  private formationService:FormationService,
                private sessionService:SessionService,
                public authService:AuthenticationService,
                private activateRoute:ActivatedRoute,
                private router:Router
  ) {}

  session!:Session;
  coursList:Cours[] = [];

  ngOnInit(): void {
    this.sessionService.getById(this.activateRoute.snapshot.params['session_id']).subscribe({
      next: session => {
        this.session = session;
        this.coursList = session.coursList;
      }
    })
  }
  
}
