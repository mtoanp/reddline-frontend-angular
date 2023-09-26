import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppStateService } from 'src/app/service/app-state.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  constructor (private activateRoute:ActivatedRoute, private appState : AppStateService) {}
  feedback:any;
  ngOnInit(): void {
    this.feedback = this.getFeedback();
  }

  getFeedback(): Observable<any> {
    return of(this.appState.feedback);
  }

  
}
