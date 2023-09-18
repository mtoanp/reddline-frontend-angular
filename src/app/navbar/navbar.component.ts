import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor (public authService: AuthenticationService, private router:Router) {}

  actions:Array<any> = [
    {title: "Home", route: "/api/home", icon: "house"},
    {title: "Catalogue", route: "/api/catalogue", icon: "search"},
    {title: "Themes", route: "/api/themes", icon: "search"},
    {title: "Formations", route: "/api/formations", icon: "safe"},
    {title: "Etudiants", route: "/api/etudiants", icon: "people"},
    {title: "Salles", route: "/api/salles", icon: "people"}
  ]
  currentAction: any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  ngOnInit(): void {
    console.log(this.authService.isStored());
    console.log("isAuthenticated" + this.authService.isAuthenticated());

    // if(this.authService.isAuthenticated()) {
    //   console.warn("logedin");
    // }
  }
  
  handleLogout() {
    alert('logout')
    this.authService.logout().subscribe({
      next: data => {this.router.navigateByUrl("/login"); }
    });
  }
}
