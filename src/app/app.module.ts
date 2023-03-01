import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';

const routes : Routes = [
  {path:'', component:HomePageComponent},
  {path:'sign-up', component:SignupPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
