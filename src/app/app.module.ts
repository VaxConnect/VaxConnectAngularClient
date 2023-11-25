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

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LastVacinnesComponent,
    CalendarPageComponent,
    NextVacinnesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
