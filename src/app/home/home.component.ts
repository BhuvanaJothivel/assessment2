import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUser = false;
  isAdmin = false;
  isSuperAdmin = false;
  username: any;
  constructor(public loginService:AuthenticationService){ }
  ngOnInit() {
    this.username = sessionStorage.getItem('username')
  }

  checkIfUser(){
    if(this.username == 'user'){
      this.isUser = true
      this.isAdmin = false;
      this.isSuperAdmin = false;
    }
    if(this.username == 'admin' || this.username == 'superadmin'){
      alert("You don't have an access for this")
    }
  }
  checkIfAdmin(){
    if(this.username == 'admin'){
      this.isUser = false
      this.isAdmin = true;
      this.isSuperAdmin = false;
    }
    if(this.username == 'user' || this.username == 'superadmin'){
      alert("You don't have an access for this")
    }
  }
  checkIfSuperadmin(){
    if(this.username == 'superadmin'){
      this.isUser = false
      this.isAdmin = false;
      this.isSuperAdmin = true;
    }
    if(this.username == 'user' || this.username == 'admin'){
      alert("You don't have an access for this")
    }
  }
}
