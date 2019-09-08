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
    EventCreateComponent
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
