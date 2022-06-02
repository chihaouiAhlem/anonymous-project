import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
  ///les var nesta3mlhom ml html lil ts
  matchForm:FormGroup;
  match:any={};
 // matches=allMatches;//bech njib les var lil edit
  findedMatch:any;
  matchId:any;
  ///na3ml des var bech nbadl esm l btn
  title:any="ADD";

  constructor( private activetedRoute:ActivatedRoute,private matchService:MatchService,private router:Router) { }

  ngOnInit() {
    ////je vais faire les conditions
    //njib id ml nav
    this.matchId=this.activetedRoute.snapshot.paramMap.get("id");
    //search match by id t3awdh boucle for
    //obj var locale
    if (this.matchId) {
this.title="Edit ";
     /// this.findedMatch=this.matches.find((obj)=>{return obj.id==this.matchId;})
     ///marra ye5ou match m3abbi marra fera4
       ///  this.match=this.matches.find(obj =>{return obj.id ==this.matchId}) **** bech n3awdhouha bl bachend
       this.matchService.getMatchById(this.matchId).subscribe((data)=>{
         this.match=data.pp;
       });
         
     // alert('here into edit');
    }
    /////else najm na7iha 5ater les variables initialise global 
    // else{
    //   this.title="ADD ";

    //   alert('here into add');

    // }
  }
  addOrEdit(){
    console.log('here my match',this.match);
    if (this.matchId) {
          ////call service to send math.find
          this.matchService.updateMatch(this.match).subscribe((data)=>{
            //call service to update match object
            
            console.log('here data after edit',data.pp);
            this.router.navigate([`admin`]);
          });

    }else{
    ////call service to update math.find
    this.matchService.addMatch(this.match).subscribe(
      (data)=>{
       // console.log('here data after add',data.message);
        this.router.navigate([`admin`]);
      }
    );

    }
  }
}

