import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  constructor(private router: Router, private toastr : ToastrService) { }

  isAlreadyLogin() {
    var currentSession  = JSON.parse(sessionStorage.getItem('loggedInUser')) || []
    // var promise = new Promise(function (toastr){
    //   this.toastr.info('Sorry','You are already logged in',{timeOut: 1000});
    // })
    if (currentSession != '') {
      // this.toastr.info('Sorry','You are already logged in',{timeOut: 1000});
      return this.router.navigate(['/'])
    }
    return true
  }
}
