import { Component } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public values = '';
  title = 'HotDeals';
  public query = '';
  public products = this.productService.getProductNames()
  public loggedInData = []

  constructor(private productService: ProductServiceService, private router: Router){}
  
  ngDoCheck() {
    this.loggedInData = JSON.parse(sessionStorage.getItem('loggedInUser')) || []
  }
  
  autoComplete (result) {
    this.query = result;
  }

  searchResults() {
    this.router.navigate(['/search-results', { query: this.query }]);
  }

  logout() {
    sessionStorage.removeItem('loggedInUser')
    this.router.navigate(['/']);
  }
}
