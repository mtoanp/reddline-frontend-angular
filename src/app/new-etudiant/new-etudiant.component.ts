import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.scss']
})
export class NewEtudiantComponent implements OnInit{

  public form!:FormGroup;
  constructor(private fb:FormBuilder, private service:EtudiantService) {}

  ngOnInit(): void {
      this.form = this.fb.group({
        nom: this.fb.control('', [Validators.required]),
        prenom: this.fb.control('', [Validators.required])  // value init
      })
  }

  saveEtudiant() {
    let product = this.form.value;
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
