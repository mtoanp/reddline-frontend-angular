import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

      })
  }

  saveProduct() {
    alert("saved");
  }
  
}
