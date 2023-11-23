import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './ui/log-in/log-in.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';
import { NavComponent } from './components/CALENDARPAGE/user/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CalendarPageComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
