import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { AppStateService } from 'src/app/service/app-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor ( public authService: AuthenticationService, 
                public appState:AppStateService,
                private router:Router) {}

  publicActions:Array<any> = [
    {title: "Home", route: "/api/home", icon: "house"},
    {title: "Catalogue", route: "/api/catalogue", icon: "search"}
    // {title: "Formations", route: "/api/formations", icon: "safe"}
  ]

  adminActions:Array<any> = [
    {title: "Themes", route: "/api/admin/themes", icon: "search"},
    {title: "Etudiants", route: "/api/admin/etudiants", icon: "people"},
    {title: "Salles", route: "/api/admin/salles", icon: "people"}
  ]
  
  currentAction: any;

  ngOnInit(): void {
    console.log("isAuthenticated" + this.authService.isAuthenticated());
  }
  
  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  login() {
    this.router.navigateByUrl("/api/login");
  }

  logout() {
    this.appState.authState = {};
    this.authService.logout().subscribe({
      next: data => {this.router.navigateByUrl("/api/login"); }
    });
  }

}
