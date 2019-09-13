import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { TheatreComponent } from './pages/theatre/theatre.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { ShowEventComponent } from './event/show-event/show-event.component';
import { EventUpdateComponent } from './event/event-update/event-update.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationUpdateComponent } from './location/location-update/location-update.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teatros', component: TheatreComponent },

  // rutas de los eventos

  { path: 'evento/create/:location_id', component: EventCreateComponent, canActivate: [LoginGuard] },
  { path: 'evento/:id', component: ShowEventComponent, canActivate: [LoginGuard] },
  { path: 'evento/update/:id', component: EventUpdateComponent, canActivate: [LoginGuard] },

  // rutas de los teatros
  { path: 'location/create', component: LocationCreateComponent, canActivate: [LoginGuard] },
  { path: 'location/update/:id', component: LocationUpdateComponent, canActivate: [LoginGuard] },

  //rutas de los users
  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/profile', component: ProfileComponent, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
