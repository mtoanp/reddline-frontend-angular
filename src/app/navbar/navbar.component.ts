import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  actions:Array<any> = [
    {title: "Home", "route": "/api/home", icon: "house"},
    {title: "Catalogue", "route": "/api/themes", icon: "search"},
    {title: "Formations", "route": "/api/formations", icon: "safe"}
  ]
  currentAction: any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
