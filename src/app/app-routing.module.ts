import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './theme/themes/themes.component';
import { HomeComponent } from './static/home/home.component';

const routes: Routes = [
  {path: "api/home", component: HomeComponent},
  {path: "api/themes", component: ThemesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
