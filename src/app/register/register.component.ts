import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MiddlewareService } from '../middleware.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : FormGroup

  constructor(private fb: FormBuilder,private toastr: ToastrService, private middleware: MiddlewareService) {
    this.user = this.fb.group({
      user_name : ["",[Validators.required]],
      email: ["",[Validators.required]],
      password : ["",[Validators.required]]
    });
  }

  ngOnInit() {
    this.middleware.isAlreadyLogin()
    $(document).ready(() => {
      $("input").on('keyup',function() {
        var value = $(this).val();
        if (value != '') {
          console.log($(this).html().parent)
          $(':focus').parent().addClass('input--filled')
        } else {
          $(':focus').parent().removeClass('input--filled')
        }
      })
    });
  }

  registerUser() {
    var registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    var counter = registeredUsers.length;
    if (counter < 1) {
      var userId = 1;
    } else {
      var userId = ++counter;
    }
    var newUser = { 
      id: userId,
      name: this.user.value.user_name,
      email: this.user.value.email,
      password: this.user.value.password
    };
    registeredUsers.push(newUser)
    localStorage.setItem('users',JSON.stringify(registeredUsers))
    this.user.reset()
    this.toastr.success('Successfully', 'Registration Done', {timeOut: 1000});
  }
}
