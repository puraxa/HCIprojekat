import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TerenComponent } from './teren/teren.component';
import { RezervacijaterminaComponent } from './rezervacijatermina/rezervacijatermina.component';
import { LigaComponent } from './liga/liga.component';
import { LigadetaljiComponent } from './ligadetalji/ligadetalji.component';
import { ShopComponent } from './shop/shop.component';
import { ClanarinaComponent } from './clanarina/clanarina.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TerenComponent,
    RezervacijaterminaComponent,
    LigaComponent,
    LigadetaljiComponent,
    ShopComponent,
    ClanarinaComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
