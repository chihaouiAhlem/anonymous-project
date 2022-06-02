import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
//import { allTeams } from 'src/app/data/matchesData';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})

////////1:nab3ath l id lil ls :setItem
////2   njibou b get item
////na3m recherche
/////mloul team objet vide ba3d team howa l ye5eth result de recherche

//najm ne5demha hakka ou n5abbi id fil url (router.navigate)
export class EditTeamComponent implements OnInit {
team:any={};
findedTeam:any;
teamId:any;
//teams:any=allTeams;
  constructor(private router:Router,private activetedRoute:ActivatedRoute,private teamService:TeamService ) { }

  ngOnInit() {
    ////je vais faire les conditions
    //njib id ml nav
    this.teamId=this.activetedRoute.snapshot.paramMap.get("id");
    //search match by id t3awdh boucle for
    //obj var locale
    

     /// this.findedMatch=this.matches.find((obj)=>{return obj.id==this.matchId;})
     ///marra ye5ou match m3abbi marra fera4
       ///  this.match=this.matches.find(obj =>{return obj.id ==this.matchId}) **** bech n3awdhouha bl bachend
       this.teamService.getTeamById(this.teamId).subscribe((data)=>{
         this.team=data.pp;
       });
         
     // alert('here into edit');
  
    /////else najm na7iha 5ater les variables initialise global 
    // else{
    //   this.title="ADD ";

    //   alert('here into add');

    // }
  }
  editTeam(){

    this.teamService.updateTeam(this.team).subscribe((data)=>{
      //call service to update match object
      
      console.log('here data after edit',data.pp);
      this.router.navigate([`admin`]);
    });


  }
}
