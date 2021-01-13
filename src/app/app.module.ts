import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TerenComponent } from './teren/teren.component';
import { RezervacijaterminaComponent } from './rezervacijatermina/rezervacijatermina.component';
import { LigaComponent } from './liga/liga.component';
import { LigadetaljiComponent } from './ligadetalji/ligadetalji.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TerenComponent,
    RezervacijaterminaComponent,
    LigaComponent,
    LigadetaljiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
