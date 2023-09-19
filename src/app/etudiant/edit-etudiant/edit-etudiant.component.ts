import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.scss']
})
export class EditEtudiantComponent implements OnInit {
  formGroup!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder, 
              private service:EtudiantService, 
              private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (etudiant) => {
        // console.log(etudiant);
        this.formGroup = this.fb.group({
          id: this.fb.control(etudiant.id),
          nom: this.fb.control(etudiant.nom),
          prenom: this.fb.control(etudiant.prenom, [Validators.required])  // value init
        })
      }, 
      error: err => {
        console.log(err);
      }
    });
  }  

  updateEtudiant() {
    let etudiant = this.formGroup.value;
    this.service.update(etudiant).subscribe({
      next: data => {
        // alert(JSON.stringify(data));
        console.log("updated");
      },
      error: err => {
        console.log(err);
      }
    })
  }
}