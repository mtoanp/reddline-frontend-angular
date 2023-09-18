import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './theme/themes/themes.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { CatalogueComponent } from './theme/catalogue/catalogue.component';
import { EtudiantsComponent } from './etudiant/etudiants/etudiants.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { SallesComponent } from './salle/salles/salles.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {path: "api/home", component: HomeComponent},
  {path: "api/catalogue", component: CatalogueComponent},
  {path: "api/themes", component: ThemesComponent},
  {path: "api/formations", component: FormationsComponent},

  {path: "api/etudiants", component: EtudiantsComponent},
  {path: "api/newEtudiant", component: NewEtudiantComponent},
  {path: "api/editEtudiant", component: NewEtudiantComponent},

  {path: "api/salles", component: SallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
