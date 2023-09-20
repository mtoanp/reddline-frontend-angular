import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.scss']
})
export class EditSalleComponent implements OnInit{
  formGroup!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder, 
                private service:SalleService, 
                private activateRoute:ActivatedRoute) {}

    ngOnInit(): void {
      this.id = this.activateRoute.snapshot.params['id'];
      this.service.getById(this.id).subscribe({
        next: (salle) => {
          // console.log(formation);
          this.formGroup = this.fb.group({
            id: this.fb.control(salle.id),
            capacite: this.fb.control(salle.capacite),
            nom: this.fb.control(salle.nom, [Validators.required])  // value init
            
          })
        }, 
        error: err => {
          console.log(err);
        }
      });
    }  
  
    updateSalle() {
      let salle = this.formGroup.value;
      this.service.update(salle).subscribe({
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


