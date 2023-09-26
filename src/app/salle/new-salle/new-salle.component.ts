import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-new-salle',
  templateUrl: './new-salle.component.html',
  styleUrls: ['./new-salle.component.scss']
})
export class NewSalleComponent implements OnInit {
  public formGroup!:FormGroup;
  constructor(private fb:FormBuilder, private service:SalleService) {}

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        nom: this.fb.control('', [Validators.required]),
        capacite: this.fb.control('', [Validators.required])  // value init
      })
  }

  saveSalle() {
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

