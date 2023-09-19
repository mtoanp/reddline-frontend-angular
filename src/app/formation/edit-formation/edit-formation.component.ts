import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent {
  formGroup!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder, 
              private service:FormationService, 
              private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
      next: (formation) => {
        // console.log(formation);
        this.formGroup = this.fb.group({
          id: this.fb.control(formation.id),
          nom: this.fb.control(formation.nom, [Validators.required])  // value init
        })
      }, 
      error: err => {
        console.log(err);
      }
    });
  }  

  updateFormation() {
    let formation = this.formGroup.value;
    this.service.update(formation).subscribe({
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
