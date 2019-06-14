import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MiddlewareService } from '../middleware.service';

declare var $:any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signIn: FormGroup
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private middleware: MiddlewareService) {
    this.signIn = fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
   }

  ngOnInit() {
    this.middleware.isAlreadyLogin()
    var registeredUsers = JSON.parse(localStorage.getItem('users')) || []
    $(document).ready(() => {
      $("input").on('keyup',function() {
        var value = $(this).val();
        if (value != '') {
          $(':focus').parent().addClass('input--filled')
        } else {
          $(':focus').parent().removeClass('input--filled')
        }
      })
    });
  }

  login() {
    var registeredUsers = JSON.parse(localStorage.getItem('users')) || []
    for (var i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].email == this.signIn.value.email && registeredUsers[i].password == this.signIn.value.password) {
        return this.authenticateUser(registeredUsers[i]);
      }
    }
    this.toastr.error('Credentials didnt matched', 'Sorry', {timeOut: 1000});
  }
  
  authenticateUser(userData) {
    var loggedInUser = {
      'id' : userData.id,
      'name' : userData.name
    };
    sessionStorage.setItem('loggedInUser',JSON.stringify(loggedInUser))
    this.signIn.reset()
    this.toastr.success('Successfully', 'Logged In', {timeOut: 1000});
    this.router.navigate(['/']);    
  }
}
