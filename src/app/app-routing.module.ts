import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './theme/themes/themes.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { CatalogueComponent } from './theme/catalogue/catalogue.component';
import { EtudiantsComponent } from './etudiant/etudiants/etudiants.component';
import { NewEtudiantComponent } from './etudiant/new-etudiant/new-etudiant.component';
import { SallesComponent } from './salle/salles/salles.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';
import { EditEtudiantComponent } from './etudiant/edit-etudiant/edit-etudiant.component';
import { AdminTemplateComponent } from './admin/admin-template/admin-template.component';
import { EditFormationComponent } from './formation/edit-formation/edit-formation.component';
import { NewFormationComponent } from './formation/new-formation/new-formation.component';
import { ShowFormationComponent } from './formation/show-formation/show-formation.component';

const routes: Routes = [
  {path: "api", children: [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent },
    {path: "catalogue", component: CatalogueComponent},
    {path: "formations", component: FormationsComponent},
    {path: "formations/:id", component: ShowFormationComponent},
  
    {path: "admin", component: AdminTemplateComponent, children: [
      {path: "themes", component: ThemesComponent},

      {path: "formations", component: FormationsComponent},
      {path: "formations/:id", component: ShowFormationComponent},
      {path: "newFormation", component: NewFormationComponent},
      {path: "editFormation/:id", component: EditFormationComponent},

      {path: "etudiants", component: EtudiantsComponent},
      {path: "etudiants/:id", component: ShowEtudiantComponent},
      {path: "newEtudiant", component: NewEtudiantComponent},
      {path: "editEtudiant/:id", component: EditEtudiantComponent},

      {path: "salles", component: SallesComponent}
    ]}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
