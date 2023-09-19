import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent {
  public formGroup!:FormGroup;
  constructor(private fb:FormBuilder, private service:FormationService) {}

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        nom: this.fb.control('', [Validators.required]),
        prenom: this.fb.control('', [Validators.required])  // value init
      })
  }

  saveFormation() {
    let product = this.formGroup.value;
    this.service.save(product).subscribe({
      next: data => {
        // alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
