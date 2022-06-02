import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { WatherService } from 'src/app/services/wather.service';

@Component({
  selector: 'app-search-wather',
  templateUrl: './search-wather.component.html',
  styleUrls: ['./search-wather.component.css']
})
export class SearchWatherComponent implements OnInit {
  searchForm:FormGroup;
  obj: any = {};
  x:any;
  path:string;
  resultWeather:any;
  constructor(private X: FormBuilder,private router:Router,private activateRoute:ActivatedRoute,private watherService:WatherService) { }

  ngOnInit() {
    this.searchForm = this.X.group({
      ///N9OLLOU GROUPILI les imputs //ylemhom fi signupForm
      ville: ["", [Validators.required]] //akther mn validateur n7oto []
     

    });
  }

  ///wather
  search(){   
    //teamToFind obj{team:valeur}
    console.log("here city",this.searchForm.value);///ba3d puth
    this.watherService.wather(this.searchForm.value).subscribe((data)=>{
      //if(data.message=="0")  {
    this.resultWeather=data.result;
    this.path=`http://openweathermap.org/img/w/${data.result.image}.png`;
   console.log("here into test weather API",data.result);
   // this.path=``;
   
console.log(data);
      }
      
   // }
    );
 }
}
