import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingDealsComponent } from './trending-deals/trending-deals.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'trending-deals', component:TrendingDealsComponent},
  {path:'product-create', component:ProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
