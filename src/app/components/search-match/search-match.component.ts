import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { allMatches } from 'src/app/data/matchesData';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  searchForm:FormGroup;
obj: any = {};
constructor(private router:Router ,private activateRoute:ActivatedRoute) { }
ngOnInit() {
    // this.puth=this.router.url;
    // if (this.puth =="/allMatches") {
    //   this.isDisplayed =true;
      
    // }
    // this.matches=allMatches;
    // this.teamcherch = this.activateRoute.snapshot.paramMap.get("searchh");
    // this.findedTeam = this.matches.find((obj: any) => {
    //   return obj.searchh == this.teamcherch;
    // });
  }
  search(){   
    localStorage.setItem ('teamToFind', JSON.stringify (this.obj));///nab3ath l valeur de l input lil LS
    //teamToFind obj{team:valeur}
    this.router.navigate(["allMatches/search"]);///nemchi l page o5ra
 }
}
