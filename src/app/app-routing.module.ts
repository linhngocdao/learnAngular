import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'product', component: ProductListComponent},
  {path:'product/add', component:ProductAddComponent},
  {path:'product/:id', component:ProductDetailComponent},
  {path:'product/:id/edit' ,component:ProductEditComponent},
  {path:'**', component:NotFoundComponent},
  {path:'home',component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
