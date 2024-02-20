import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterlistComponent },
  { path: 'character/:id', component: CharacterdetailComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
