import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemesComponent } from './theme/themes/themes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './public/home/home.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { CatalogueComponent } from './theme/catalogue/catalogue.component';
import { EtudiantsComponent } from './etudiant/etudiants/etudiants.component';
import { NewEtudiantComponent } from './etudiant/new-etudiant/new-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { SallesComponent } from './salle/salles/salles.component';
import { AdminTemplateComponent } from './admin/admin-template/admin-template.component';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ThemesComponent,
    HomeComponent,
    FormationsComponent,
    CatalogueComponent,
    EtudiantsComponent,
    NewEtudiantComponent,
    EditEtudiantComponent,
    SallesComponent,
    AdminTemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
