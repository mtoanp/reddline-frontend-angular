import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { Session } from 'src/app/model/session.model';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-new-candidature',
  templateUrl: './new-candidature.component.html',
  styleUrls: ['./new-candidature.component.scss']
})
export class NewCandidatureComponent implements OnInit {
  
  constructor(  private fb:FormBuilder, 
                private sessionService:SessionService,
                private activateRoute:ActivatedRoute
  ) {}

  formGroup!:FormGroup;
  formation!:Formation;
  session!:Session;

  ngOnInit(): void {
    this.sessionService.getById(this.activateRoute.snapshot.params['session_id']).subscribe({
      next: session => {
        this.session = session;
        this.formation = session.formation;
      }
    })

    this.formGroup = this.fb.group({
      nom: this.fb.control('', [Validators.required]),
      prenom: this.fb.control('', [Validators.required]),  
      email: this.fb.control('', [Validators.required]) 
      // formation: this.fb.control('Formation'),  
      // session: this.fb.control('')
    })
  }

  saveCandidature() {
    let candidature = this.formGroup.value;
    alert(JSON.stringify(candidature));
    // this.service.save(candidature).subscribe({
    //   next: data => {
        // alert(JSON.stringify(data));
      // },
      // error: err => {
      //   console.log(err);
      // }
    // })
  }
}
