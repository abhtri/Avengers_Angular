import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AvengerDetailsComponent } from './avenger-details/avenger-details.component';


const routes: Routes = [
  { path: '', component: GridComponent },
      { path: 'avengers/:name', component: AvengerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
