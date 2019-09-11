import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { HeroComponent } from './template/hero/hero.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { TheatreComponent } from './pages/theatre/theatre.component';
import { GalleryComponent } from './template/gallery/gallery.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { ShowEventComponent } from './event/show-event/show-event.component';
import { EventUpdateComponent } from './event/event-update/event-update.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationUpdateComponent } from './location/location-update/location-update.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    MainComponent,
    TheatreComponent,
    GalleryComponent,
    EventCreateComponent,
    ShowEventComponent,
    EventUpdateComponent,
    LocationCreateComponent,
    LocationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
