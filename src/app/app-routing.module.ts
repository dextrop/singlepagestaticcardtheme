import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductgallerysampleComponent } from './productgallerysample/productgallerysample.component';

const routes: Routes = [
  {
    path: "", component: ProductgallerysampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
