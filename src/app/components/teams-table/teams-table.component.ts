import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
//import { allTeams } from 'src/app/data/matchesData';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  searchForm:FormGroup;
 // searcheForm:FormGroup;
  title:string;
  messsage:string;

teams:any=[];
obj:any={};
puth:string;
isDisplayed:boolean=false;
findedTeams:any;
teamSearch:any;
pageOfItems: Array<any>;

//teamsTab:any=allTeams;
  constructor(private router:Router,private teamService:TeamService,private activatedRoute:ActivatedRoute) { }
 // items = [];
  ngOnInit() {
    this.puth=this.router.url;
    // alert(this.puth);
    if (this.puth=="/admin") {
      this.isDisplayed =true;
      //this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));

      
     }
    //this.teams=this.teamsTab;

    //this. teams=this.allTeams();
    this.allTeams();

  }
  goToDisplay(param:any){
    this.router.navigate([`teamInfo/${param}`]);
}

goToEdit(param: number) {
  // location.replace non ta3ml reload
  //this.router.navigate([`editTeam/${param}`]);//najmou nhezou tableau//matchInfo howa path //
  ///on peut garder le id dans l url ou dans LS

  //localStorage.setItem("displayedTraining",this.id);
  this.router.navigate([`teamEdit/${param}`]);

}
////delete
deleteMatchById(x) {
  ////loulanya une methode tab3a html
  this.teamService.deleteTeamById(x).subscribe((data)=>{
    console.log('here after delete',data.pp);///reponse pp tjih fi data
    ////refresh sans reload
    // this.matchService.getAllMatches().subscribe(
    //   (data)=>{
    //     this.matches=data.matches;
    //   }
    // )
    ////sna3na fct kma on init bech ya3ml refresh automatique
    this.allTeams();
  }
  ); ///meth teb3a service
}
////search teams  by post
search(){
 
  this.teamService.searchTeamByStadium(this.obj).subscribe(
   (data)=>{
     this.messsage=data.message;
     this.teams=data.team;
     
    console.log('here data after search',data.message);
    
 });
 }
 searchByStaduim(){
 
  this.teamService.searchByStaduimGet(this.obj).subscribe(
   (data)=>{
     this.messsage=data.message;
     this.teams=data.team;
     
    console.log('here data after search',data.message);
    
 });
 }


// }
allTeams(){
  this.teamService.getAllTeams().subscribe((response) => {
    this.teams = response.teams;
    this.title=response.message;///matches loula tableau vide declaree matches2 :ili ja ml BE

  });
}


/////
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }

}
