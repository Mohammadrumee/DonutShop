import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutCartComponent } from './component/donut-cart/donut-cart.component';
import { DonutDetailsComponent } from './component/donut-details/donut-details.component';
import { DonutListComponent } from './component/donut-list/donut-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: DonutListComponent },
  { path: 'donutDetail/:id', component: DonutDetailsComponent },
  { path: 'cart', component: DonutCartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
