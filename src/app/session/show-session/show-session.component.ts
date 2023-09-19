import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-show-session',
  templateUrl: './show-session.component.html',
  styleUrls: ['./show-session.component.scss']
})
export class ShowSessionComponent implements OnInit {
  session!:Session;
  // sessions:Session[] = [];
  id!:number;

  constructor( private service:SessionService,
               public authService:AuthenticationService,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (session) => {
        this.session = session;
        // alert(JSON.stringify(session));
      }, 
      error: err => {
        console.log(err);
      }
    });
  }
}
