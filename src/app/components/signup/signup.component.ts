import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup; ///1
  test: boolean = false;
  message:string="";
  imagePreview: any;

  //test:boolean=false;
  constructor(private X: FormBuilder, private userService: UserService,private router:Router) {
    //2
    //cre
  }

  ngOnInit() {
    this.signupForm = this.X.group({
      ///N9OLLOU GROUPILI les imputs //ylemhom fi signupForm
      firstName: ["", [Validators.required, Validators.minLength(3)]], //akther mn validateur n7oto []
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      password: [  "",  [  Validators.required,  Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,20}$"  ),  ],  ],
      img: [""],

    });
    // this.test=true;
    this.test = true;
  }
  signup() {
    this.userService.signUpUser(this.signupForm.value,this.signupForm.value.img).subscribe((data)=>{
      if(data.message=="0")  {
      //this.message=data.message;
      this.message="Email exist";
      }
     this.router.navigate([``]);
      
    });
  }
  ////img
  onImageSelected(event: Event) {
    //files[0] :une seul selection
    ///if(file.size)
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      ///imagePreview:image selectionnee

      ////ybadel image en string
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
