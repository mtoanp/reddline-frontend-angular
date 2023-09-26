import { Salle } from './../../model/salle.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-show-salle',
  templateUrl: './show-salle.component.html',
  styleUrls: ['./show-salle.component.scss']
})
export class ShowSalleComponent implements OnInit {

  salle!:Salle;
  id!:number;

  constructor( private service:SalleService,
               private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (salle) => {
        this.salle = salle;
      }, 
      error: err => {
        console.log(err);
      }
    });
  }

}
