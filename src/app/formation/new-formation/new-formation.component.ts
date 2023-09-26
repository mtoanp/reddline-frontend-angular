import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent {
  
  constructor(private fb:FormBuilder, 
              private service:FormationService,
              private router:Router
  ) {}

  public formGroup!:FormGroup;

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        nom: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),
        prix: this.fb.control('', [Validators.required])
      })
  }

  saveFormation() {
    let product = this.formGroup.value;
    this.service.save(product).subscribe({
      next: formation => {
        // alert(JSON.stringify(formation));
        this.router.navigateByUrl(`api/formations/${formation.id}`);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
