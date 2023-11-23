import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { LogInComponent } from './ui/log-in/log-in.component';
import { LastVacinnesComponent } from './components/HOMEPAGE/User/last-vacinnes/last-vacinnes.component';
import { NextVacinnesComponent } from './components/HOMEPAGE/User/next-vacinnes/next-vacinnes.component';

@NgModule({
  declarations: [
    AppComponent,
  
    LogInComponent,
    LastVacinnesComponent,
    NextVacinnesComponent
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
