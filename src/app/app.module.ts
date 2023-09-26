import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ThemesComponent } from './theme/themes/themes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './public/home/home.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { CatalogueComponent } from './theme/catalogue/catalogue.component';
import { SallesComponent } from './salle/salles/salles.component';
import { AdminTemplateComponent } from './admin/admin-template/admin-template.component';
import { LoginComponent } from './public/login/login.component';
import { EtudiantsComponent } from './etudiant/etudiants/etudiants.component';
import { NewEtudiantComponent } from './etudiant/new-etudiant/new-etudiant.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';
import { EditEtudiantComponent } from './etudiant/edit-etudiant/edit-etudiant.component';
import { NewFormationComponent } from './formation/new-formation/new-formation.component';
import { EditFormationComponent } from './formation/edit-formation/edit-formation.component';
import { ShowFormationComponent } from './formation/show-formation/show-formation.component';
import { SessionsComponent } from './session/sessions/sessions.component';
import { ShowSessionComponent } from './session/show-session/show-session.component';
import { NewSessionComponent } from './session/new-session/new-session.component';
import { EditSessionComponent } from './session/edit-session/edit-session.component';
import { CoursComponent } from './cours/cours/cours.component';
import { NewCandidatureComponent } from './candidature/new-candidature/new-candidature.component';
import { QuiSommesNousComponent } from './public/qui-sommes-nous/qui-sommes-nous.component';
import { ContactezNousComponent } from './public/contactez-nous/contactez-nous.component';
import { EditSalleComponent } from './salle/edit-salle/edit-salle.component';
import { NewSalleComponent } from './salle/new-salle/new-salle.component';
import { ShowSalleComponent } from './salle/show-salle/show-salle.component';
import { ThemeTreeComponent } from './theme/theme-tree/theme-tree.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
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
    LoginComponent,
    ShowEtudiantComponent,
    NewFormationComponent,
    EditFormationComponent,
    ShowFormationComponent,
    SessionsComponent,
    ShowSessionComponent,
    NewSessionComponent,
    EditSessionComponent,
    CoursComponent,
    NewCandidatureComponent,
    QuiSommesNousComponent,
    ContactezNousComponent,
    EditSalleComponent,
    NewSalleComponent,
    ShowSalleComponent,
    ThemeTreeComponent,
    FeedbackComponent
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
