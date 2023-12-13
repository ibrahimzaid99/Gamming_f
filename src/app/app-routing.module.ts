import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './Component/first-comp/first-comp.component';
import { LoginComponent } from './Component/login/login.component';
import { RegesterComponent } from './Component/regester/regester.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { CatProductsComponent } from './Component/cat-products/cat-products.component';
import { ProductViewComponent } from './Component/product-view/product-view.component';
import { AdminProductComponent } from './Component/admin-product/admin-product.component';
import { AdminCategoryComponent } from './Component/admin-category/admin-category.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CartComponent } from './Component/cart/cart.component';
import { authGuard } from './Guards/auth/auth.guard';
import { adminGuard } from './Guards/admin/admin.guard';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { AddnewProductComponent } from './Component/addnew-product/addnew-product.component';
import { OrdersummaryComponent } from './Component/ordersummary/ordersummary.component';
import { AddNewCatComponent } from './Component/add-new-cat/add-new-cat.component';

const routes: Routes = [
  { path: 'Home', component: FirstCompComponent },
  { path: '', component: FirstCompComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regester', component: RegesterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'products', component: ProductDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CatProductsComponent },
  { path: 'product/:id', component: ProductViewComponent },
  {
    path: 'admin/product',
    canActivate: [adminGuard],
    component: AdminProductComponent,
  },
  {
    path: 'admin/product/edit/:id',
    canActivate: [adminGuard],
    component: AddnewProductComponent,
  },
  {
    path: 'admin/category/edit/:id',
    canActivate: [adminGuard],
    component: AddNewCatComponent,
  },
  {
    path: 'admin/category',
    canActivate: [adminGuard],
    component: AdminCategoryComponent,
  },
  { path: 'admin', canActivate: [adminGuard], component: DashboardComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent },
  { path: 'order', canActivate: [authGuard], component: OrdersummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
