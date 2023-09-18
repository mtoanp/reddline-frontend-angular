import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userFormGroup!:FormGroup;
  errorMessage:any;

  constructor ( private fb : FormBuilder,
                private authService : AuthenticationService,
                private router : Router){}
 
  ngOnInit(): void {
     this.userFormGroup= this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
     })
  }

  handleLogin(){
    let username = this.userFormGroup.value.username as string;
    let password = this.userFormGroup.value.password as string;

    // alert ("username = "+username +", & password = "+password);
    this.authService.login(username, password).subscribe({
      next: (appUser: any) => { 
        this.authService.authenticateUser(appUser).subscribe({
          next: (data: any) => {this.router.navigateByUrl("/admin");}  
        })
      }, 
      error: (err: any) => {this.errorMessage = err; } 
    });
  }
}
