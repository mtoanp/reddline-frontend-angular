import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    // this.feedback = this.appState.msg;
    // this.feedback = this.activateRoute.snapshot.params['msg'];
    // console.log(this.activateRoute.snapshot.params['msg']);
    // console.log(this.activateRoute.snapshot.queryParamMap.get('msg'));
    console.log(this.feedback);
    this.getMessage();
  }

  getMessage(): Observable<any> {
    // return this.feedback.asObservable();
    return this.feedback.asObservable();
  }

  
}
