import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public results:any = [];
  public query;
  constructor(private route: Router, private activatedRoute: ActivatedRoute,private productService: ProductServiceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.query = params.get("query");
      this.results = this.productService.getAllProducts().filter(data => data.name == this.query)
    })
  }

  grabItem(id) {
    this.productService.grabIt(id)
  }
}
