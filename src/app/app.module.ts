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
import { HomeComponent } from './static/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ThemesComponent,
    HomeComponent
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
