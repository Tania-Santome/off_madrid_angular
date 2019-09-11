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


const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teatros', component: TheatreComponent },

  // rutas de los eventos

  { path: 'evento/create', component: EventCreateComponent },
  { path: 'evento/:id', component: ShowEventComponent },
  { path: 'evento/update/:id', component: EventUpdateComponent },

  // rutas de los teatros
  { path: 'location/create', component: LocationCreateComponent },
  { path: 'location/update/:id', component: LocationUpdateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
