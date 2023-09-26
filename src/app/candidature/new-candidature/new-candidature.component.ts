import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'src/app/model/candidature.model';
import { Formation } from 'src/app/model/formation.model';
import { Session } from 'src/app/model/session.model';
import { CandidatureService } from 'src/app/service/candidature.service';
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
                private candidatureService:CandidatureService,
                private etudiantService:EtudiantService,
                private activateRoute:ActivatedRoute,
                private router:Router
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
    let etudiant = this.formGroup.value;
    // console.log(this.session.candidats.find((element) => element.email === etudiant.email));
    if(this.session.candidats.find((element) => element.email === etudiant.email)) {
      // console.log("Error: email already existed");
      this.showMessage("Error: email already existed");
      return;
    }
    // alert(JSON.stringify(etudiant));

    this.etudiantService.save(etudiant).subscribe({
      next: etudiant => {
        alert(JSON.stringify(etudiant));
        let candidature:Candidature = new Candidature();  // Candidature as class
        candidature.idSession = this.session.id;
        candidature.idEtudiant = etudiant.id;
        candidature.valide = false;

        this.candidatureService.save(candidature).subscribe({
          next: data => {
            // alert(JSON.stringify(data));
            this.router.navigateByUrl(`api/sessions/${this.session.id}`);
          },
          error: err => {
            console.log(err);
          }
        })
      },

      error: err => {
        console.log(err);
      }
    })
    // console.warn(JSON.stringify(candidature));
  }

  showMessage(msg:any) {
    if(msg) {
      // console.log(msg);
      this.router.navigate(['api/message', {msg: msg}]);
    }
  }
}
