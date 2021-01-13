import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaComponent } from './liga/liga.component';
import { LigadetaljiComponent } from './ligadetalji/ligadetalji.component';
import { RezervacijaterminaComponent } from './rezervacijatermina/rezervacijatermina.component';

const routes: Routes = [
  {path: 'rezervacijatermina', component:RezervacijaterminaComponent},
  {path: 'liga', component: LigaComponent},
  {path: 'ligadetalji', component:LigadetaljiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
