import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-trending-deals',
  templateUrl: './trending-deals.component.html',
  styleUrls: ['./trending-deals.component.css']
})
export class TrendingDealsComponent implements OnInit {

  public products = [];
  public trendingProducts:any = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    // localStorage.removeItem('grabbed-items')
    this.products = this.productService.getAllProducts()
    this.trendingProducts = this.getTrendingProducts()
    console.log(this.trendingProducts)
  }
  
  grabItem(id) {
    this.productService.grabIt(id)
    this.trendingProducts = this.getTrendingProducts()
  }

  getTrendingProducts() {
    var grabbedItems = JSON.parse(localStorage.getItem('grabbed-items')) || [];
    // console.log('Grabbed',grabbedItems.length)
    if (grabbedItems.length > 0) {
      this.trendingProducts = grabbedItems.sort(function(a, b){return b.clicks - a.clicks}); 
      this.trendingProducts = this.trendingProducts.slice(0,4)
    } else {
      this.trendingProducts = [];
    }
    return this.trendingProducts;
  }
}
