import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//object that will containes email and pwd attributes
user:any={};//n3arref bih
message:string="";
//etape2
loginForm:FormGroup;//n3arref bil formaulaire
  constructor (private userService:UserService,private router:Router) { }
///5ass bl angular execute automatiquement the code 
  ngOnInit() {
  

  }
  // clickMe(){

  //   alert("ok")
  // }
  login(){
    console.log('here my user',this.user);
    this.userService.loginUser(this.user).subscribe((data)=>{
      console.log(data);
      if (data.message !="2") {
        this.message="Echec login";

      }else{
        this.router.navigate([``]);
      }
    });
  }

}
