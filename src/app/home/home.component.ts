import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products = [];
  // public values = '';

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    console.log(this.products)
    this.productService.getProductNames()
  }

  grabItem(id) {
    this.productService.grabIt(id)
  }

  getProductsByFilter(event: any) {
    var selectedValue = event.target.value
    var allProducts = JSON.parse(localStorage.getItem('products')) || [];
      if (selectedValue == 'highest') {
        this.products = allProducts.sort(function(a, b){return b.price - a.price}); 
      } else if (selectedValue == 'lowest') {
        this.products = allProducts.sort(function(a,b){return a.price - b.price});
      } else {
        this.products = allProducts;
      }
  }
}
