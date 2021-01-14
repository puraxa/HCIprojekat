import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanarinaComponent } from './clanarina/clanarina.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LigaComponent } from './liga/liga.component';
import { LigadetaljiComponent } from './ligadetalji/ligadetalji.component';
import { RezervacijaterminaComponent } from './rezervacijatermina/rezervacijatermina.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'rezervacijatermina', component:RezervacijaterminaComponent},
  {path: 'liga', component: LigaComponent},
  {path: 'ligadetalji', component:LigadetaljiComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'clanarina', component:ClanarinaComponent},
  {path: 'kontakt', component:KontaktComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
