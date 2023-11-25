import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './ui/log-in/log-in.component';
import { HomePageComponent } from './ui/USER/home-page/home-page.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';

const routes: Routes = [
  { path: 'calendar-page', component: CalendarPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'calendar-page', component: CalendarPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
