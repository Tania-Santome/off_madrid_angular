import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { HeroComponent } from './template/hero/hero.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventUpdateComponent } from './events/event-update/event-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    EventListComponent,
    EventCreateComponent,
    EventUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
