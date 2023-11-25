import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './ui/log-in/log-in.component';
import { HomePageComponent } from './ui/USER/home-page/home-page.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { SanitaryHomePageComponent } from './ui/SANITARY/sanitary-home-page/sanitary-home-page.component';

const routes: Routes = [
  { path: 'calendar-page', component: CalendarPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'sanitary-home-page', component: SanitaryHomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
