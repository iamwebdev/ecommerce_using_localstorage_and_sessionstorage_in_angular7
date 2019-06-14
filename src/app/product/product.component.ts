import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : FormGroup;
  public productDetails:any = [];
  public confirmProductDetails:any = [];

  constructor(private fb: FormBuilder, private productService : ProductServiceService,private toastr: ToastrService ) {
      this.product = this.fb.group({
        name : ["", [Validators.required]],
        price : ["", [Validators.required]]
      });
  }

  ngOnInit() {
    // localStorage.removeItem('products');
    this.productDetails = this.productService.getAllProducts()
  }

  saveProduct() {
    var addedProducts = JSON.parse(localStorage.getItem('products')) || [];
    var productCount = addedProducts.length;
    if (productCount > 0) {
      var id = ++productCount
    } else {
      var id = 1;
    }
    var path = `assets/products/${id}.jpg`
    var productData = {
      id : id,
      name : this.product.value.name,
      price : this.product.value.price,
      imagePath : path
    };
    addedProducts.push(productData)
    localStorage.setItem('products',JSON.stringify(addedProducts));
    this.product.reset()
    this.productDetails = this.productService.getAllProducts()
    this.toastr.success('Successfully', 'Product added',{timeOut: 1000});
  }

  deleteProduct(id) {
    var index = this.productDetails.findIndex(product => product.id == id)
    this.productDetails.splice(index,1)
    localStorage.setItem('products',JSON.stringify(this.productDetails))
    this.productService.getAllProducts()
    this.toastr.error('Successfully', 'Product deleted',{timeOut: 1000});
  }

  confirmBox(id) {
    this.confirmProductDetails = this.productService.getAllProducts().filter(data=> data.id == id);
  }

}
