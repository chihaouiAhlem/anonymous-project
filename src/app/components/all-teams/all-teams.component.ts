import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllTeamsService } from 'src/app/services/all-teams.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {
  searchForm:FormGroup;
path:string;
teams:any;
pageOfItems: Array<any>;

  constructor(private X: FormBuilder,private allTeamsService:AllTeamsService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {

    this.searchForm = this.X.group({
      ///N9OLLOU GROUPILI les imputs //ylemhom fi signupForm
      ville: ["", [Validators.required]] //akther mn validateur n7oto []
     

    });
  }

  search(){   
    //teamToFind obj{team:valeur}
    console.log("here city",this.searchForm.value);///ba3d puth
    this.allTeamsService.getAllTeams(this.searchForm.value).subscribe((data)=>{
      //if(data.message=="0")  {
   this.teams=data.result;
   // this.path=`http://openweathermap.org/img/w/${data.result.image}.png`;
   console.log("here into test teams API",this.teams);
   // this.path=``;
   //this.path=`http://openweathermap.org/img/w/${data.result.image}.png`;
  // this.path=this.teams.logo;

   
//console.log(data);
  //    }
      
    }
    );
 }
 ///////////pagination
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }


}
