import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: FormGroup;
  public editProduct = [];
  public productId;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router : Router, private productService : ProductServiceService) {
    const routeParam = this.activatedRoute.snapshot.params;
    this.productId = routeParam.id;
    this.editProduct = this.productService.getAllProducts().filter(data => data.id == this.productId);
    
    this.product = this.fb.group({
      id: this.productId,
      name: [[this.editProduct[0].name],[Validators.required]],
      price : [[this.editProduct[0].price],[Validators.required]],
      imagePath: `assets/products/{$productid}.jpg`   
    });

  }

  ngOnInit() {
  }

  updateProduct(){
    var allProducts = this.productService.getAllProducts();
    var index = allProducts.findIndex(data => data.id == this.productId);
    var newData = {
      'id': this.product.value.id,
      'name': this.product.value.name,
      'price': this.product.value.price,
      'imagePath': 'assets/products/'+this.productId+'.jpg'  
    };
    console.log(newData)
    allProducts[index] = newData;
    localStorage.setItem('products',JSON.stringify(allProducts));
    this.product.reset()
    this.router.navigate(['/product-create']);
    
  }
}
