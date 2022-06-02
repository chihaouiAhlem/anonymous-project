import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { allMatches } from "src/app/data/matchesData";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-match-info",
  templateUrl: "./match-info.component.html",
  styleUrls: ["./match-info.component.css"],
})
export class MatchInfoComponent implements OnInit {
  s: string = "match Information";
  matchId: any;
  //matches = allMatches; //njibouh bech nlwjou fih 3al id
  findedMatch: any; ///bech n7ot fih jdid
  x:any=[];
  constructor(private activatedRoute : ActivatedRoute,private matchService:MatchService) {
    ///route active pour recuperer le id puis on fait des manupulation pour recuperer le dernier charactere
  }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get("id");
    //console.log(this.matchId);
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id==this.matchId) {
    //    this.findedMatch=this.matches[i];
    //    break;
    //   }

    // }//methode1
    //methode2
    // this.findedMatch = this.matches.find((obj: any) => {
    //   return obj.id == this.matchId;
    // })BE
    ////pp reponse
    //data:reponse fiha par exemple message w pp a7na 7ajetna b pp
    this.matchService.getMatchById(this.matchId).subscribe((data)=>{
      console.log('here data',data.pp);
  this.findedMatch=data.pp});


    //console.log(this.findedMatch);
  }
}
