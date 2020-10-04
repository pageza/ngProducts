import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductBrandComponent} from './product-brand/product-brand.component';
import {ProductCategoryComponent} from './product-category/product-category.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent, children: [
      {path: 'details/:id', component: ProductDetailsComponent},
      {path: 'brand/:id', component: ProductBrandComponent},
      {path: 'category/:id', component: ProductCategoryComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
