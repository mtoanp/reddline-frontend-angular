import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
}
