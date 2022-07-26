import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentMoviesComponent } from './features/movies/recent-movies/recent-movies.component';
import { ModernCarouselComponent } from './features/movies/modern-carousel/modern-carousel.component';
import { CatalogueComponent } from './features/movies/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentMoviesComponent,
    ModernCarouselComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
