import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";
//import { allMatches } from "../../data/matchesData";
@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  title:string;
  messsage:string;
  searchForm:FormGroup;
  obj:any={};
  pageOfItems: Array<any>;

  constructor(private router: Router, private matchService: MatchService) {
    ////importer module Router :kima routerLink ema routerLink nesta3mlouha ken f Html
  }
  /////kif bech nhez 7aja en parametre
  ngOnInit() {
    ////call services getallmatches()
    //this.matches = allMatches; ///ba3d na7iha just 5alitha bech ndhaher tab
    //ma3adech njib statiqement
     this.matchService.getAllMatches().subscribe((response) => {
      this.matches = response.matches;
      this.title=response.message;///matches loula tableau vide declaree matches2 :ili ja ml BE

     });
   // this.allMatches();
  }
  

  ///fct pour afficher match
  goToDisplay(param: number) {
    //  alert(param)
    // location.replace non ta3ml reload
    this.router.navigate([`matchInfo/${param}`]); //najmou nhezou tableau//matchInfo howa path //
  }
  goToEdit(param: number) {
    // location.replace non ta3ml reload
    this.router.navigate([`editMatch/${param}`]); //najmou nhezou tableau//matchInfo howa path //
  }
  deleteMatchById(x) {
    ////loulanya une methode tab3a html
    this.matchService.deleteMatchById(x).subscribe((data)=>{
      console.log('here after delete',data.pp);///reponse pp tjih fi data
      ////refresh sans reload
      // this.matchService.getAllMatches().subscribe(
      //   (data)=>{
      //     this.matches=data.matches;
      //   }
      // )
      ////sna3na fct kma on init bech ya3ml refresh automatique
      this.allMatches();
    }
    ); ///meth teb3a service
  }


  ///fct pour refresh
  allMatches(){
    this.matchService.getAllMatches().subscribe((response) => {
      this.matches = response.matches;
      this.title=response.message;///matches loula tableau vide declaree matches2 :ili ja ml BE

    });
  }
  ////search score>=3
  searchScore(){

    this.matchService.searchScore(this.obj).subscribe(
      (data)=>{
        //this.messsage=data.message;
       this.matches=data.match;
        
      // console.log('here data after search');
       
    }
    );
  }


  searchSc(){
    this.matchService.searchSc().subscribe(
      (data)=>{
        //this.messsage=data.message;
       this.matches=data.match;
        
      // console.log('here data after search');
       
    }
    );

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
}
