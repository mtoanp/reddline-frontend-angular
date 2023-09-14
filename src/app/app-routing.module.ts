import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './theme/themes/themes.component';
import { HomeComponent } from './static/home/home.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { CatalogueComponent } from './theme/catalogue/catalogue.component';
import { EtudiantsComponent } from './etudiant/etudiants/etudiants.component';

const routes: Routes = [
  {path: "api/home", component: HomeComponent},
  {path: "api/catalogue", component: CatalogueComponent},
  {path: "api/themes", component: ThemesComponent},
  {path: "api/formations", component: FormationsComponent},
  {path: "api/etudiants", component: EtudiantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
