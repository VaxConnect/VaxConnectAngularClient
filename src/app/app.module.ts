import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './ui/log-in/log-in.component';
import { NavComponent } from './components/CALENDARPAGE/user/nav/nav.component';
import { NavbarComponent } from './components/COMMONS/navbar/navbar.component';
import { FooterComponent } from './components/COMMONS/footer/footer.component';
import { HomePageComponent } from './ui/USER/home-page/home-page.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';
import { LastVacinnesComponent } from './components/HOMEPAGE/User/last-vacinnes/last-vacinnes.component';
import { NextVacinnesComponent } from './components/HOMEPAGE/User/next-vacinnes/next-vacinnes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { VaccinesPageComponent } from './ui/USER/vaccine-page/vaccines-page.component';
import { VacuneItemComponent } from './components/VACCINEPAGE/vacune-item/vacune-item.component';
import { SanitaryHomePageComponent } from './ui/SANITARY/sanitary-home-page/sanitary-home-page.component';
import { YoungestPatientsComponent } from './components/HOMEPAGE/Sanitary/youngest-patients/youngest-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LastVacinnesComponent,
    NextVacinnesComponent,
    LogInComponent,
    CalendarPageComponent,
    NavComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LogInComponent,
    LastVacinnesComponent,
    NextVacinnesComponent,
    LogInComponent,
    PageNotFoundComponent,
    VaccinesPageComponent,
    VaccinesPageComponent,
    VacuneItemComponent,
    SanitaryHomePageComponent,
    YoungestPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
