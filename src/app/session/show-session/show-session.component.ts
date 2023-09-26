import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'src/app/model/candidature.model';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Formation } from 'src/app/model/formation.model';
import { Session } from 'src/app/model/session.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { CandidatureService } from 'src/app/service/candidature.service';
import { FormationService } from 'src/app/service/formation.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-show-session',
  templateUrl: './show-session.component.html',
  styleUrls: ['./show-session.component.scss'],
})
export class ShowSessionComponent implements OnInit {
  formation!: Formation;
  session!: Session;
  // sessions:Session[] = [];
  id!: number;
  // candidature!:Candidature;

  constructor(
    private formationService: FormationService,
    private sessionService: SessionService,
    private candidatureService: CandidatureService,
    public authService: AuthenticationService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.sessionService.getById(this.id).subscribe({
      next: (session) => {
        this.session = session;
        // alert(JSON.stringify(session));
        this.formationService.getById(this.session.id).subscribe({
          next: (formation) => {
            this.formation = formation;
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  coursList() {
    this.router.navigateByUrl(`api/coursList/${this.session.id}`);
  }

  newCandidature() {
    this.router.navigateByUrl(`api/newCandidature/${this.session.id}`);
  }

  showUser(etudiant: Etudiant) {
    this.router.navigateByUrl(`api/admin/etudiants/${etudiant.id}`);
  }
  // saveCandidature() {}

  deleteCandidature(etudiant: Etudiant) {
    // let candidature:Candidature = new Candidature(this.session.id, etudiant.id, false);
    let candidature: Candidature = new Candidature();
    candidature.idSession = this.session.id;
    candidature.idEtudiant = etudiant.id;
    candidature.valide = false;
    // console.warn(candidature);
    this.candidatureService.delete(candidature).subscribe({
      next: (data) => {
        // alert(JSON.stringify(data));
        // console.warn("removeCandidature");
        this.session.candidats = this.session.candidats.filter(
          (p) => p.id != etudiant.id
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCandidature(etudiant: Etudiant, valide: boolean) {
    if (valide && this.session.etudiants.length >= this.session.capacite)
      return;

    this.candidatureService
      .update(this.buildCandidature(etudiant.id, valide))
      .subscribe({
        next: (data) => {
          // alert(JSON.stringify(data));
          if (valide) {
            this.session.candidats = this.session.candidats.filter(
              (p) => p.id != etudiant.id
            );
            this.session.etudiants.push(etudiant);
          } else {
            this.session.etudiants = this.session.etudiants.filter(
              (p) => p.id != etudiant.id
            );
            this.session.candidats.push(etudiant);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  buildCandidature(idEtudiant: number, valide: boolean): Candidature {
    let candidature: Candidature = new Candidature(); // Candidature as class
    candidature.idSession = this.session.id;
    candidature.idEtudiant = idEtudiant;
    candidature.valide = valide;

    // let candidature:Candidature = new Candidature(
    //   this.session.id,
    //   idEtudiant,
    //   valide
    // );  // Candidature as class

    // alert(JSON.stringify(candidature));
    return candidature;
  }
}
