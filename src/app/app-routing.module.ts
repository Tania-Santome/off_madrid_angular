import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { TheatreComponent } from './pages/theatre/theatre.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { ShowEventComponent } from './event/show-event/show-event.component';
import { EventUpdateComponent } from './event/event-update/event-update.component';


const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teatros', component: TheatreComponent },
  { path: 'evento', component: EventCreateComponent },
  { path: 'evento/:id', component: ShowEventComponent },
  { path: 'evento/:id/update', component: EventUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
