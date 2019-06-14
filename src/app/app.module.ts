import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypeaheadModule } from 'ngx-typeahead';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendingDealsComponent } from './trending-deals/trending-deals.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductServiceService } from './product-service.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MiddlewareService } from './middleware.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendingDealsComponent,
    ProductComponent,
    EditProductComponent,
    SearchResultsComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypeaheadModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ProductServiceService, MiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
