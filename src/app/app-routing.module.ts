import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { TheatreComponent } from './pages/theatre/theatre.component';
import { EventCreateComponent } from './event/event-create/event-create.component';


const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teatros', component: TheatreComponent },
  { path: 'evento', component: EventCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
