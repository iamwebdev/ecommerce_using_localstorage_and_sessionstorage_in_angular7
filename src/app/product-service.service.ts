import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private toastr: ToastrService) { }

  getAllProducts() {
    return JSON.parse(localStorage.getItem('products'))
  }

  getProductNames(){
    var allProducts = this.getAllProducts()
    var productNames = []
    for (var product in allProducts) {
      productNames.push(allProducts[product].name)
    }
    return productNames
  }

  grabIt(id) {
    var previousGrabbedItems = JSON.parse(localStorage.getItem('grabbed-items')) || [];
    var grabbedItem = this.getAllProducts().filter(data => data.id == id);
    var itemAlreadyExists = previousGrabbedItems.filter(data => data.id == grabbedItem[0].id);
    var newData = { 
      id: grabbedItem[0].id,
      name: grabbedItem[0].name,
      imagePath: grabbedItem[0].imagePath,
      clicks : 1
    };
    if (itemAlreadyExists.length > 0) {
      var index = previousGrabbedItems.findIndex(data => data.id == id);
      var clickCount = ++itemAlreadyExists[0].clicks
      newData.clicks = clickCount
      previousGrabbedItems[index] = newData  
    } else {
      previousGrabbedItems.push(newData)  
    }
    localStorage.setItem('grabbed-items',JSON.stringify(previousGrabbedItems));
    this.toastr.success('Successfully', 'Item Grabbed', {timeOut: 1000});
  }
}
