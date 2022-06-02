import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  s: string = "team Information";
  teamId: any;
  //matches = allMatches; //njibouh bech nlwjou fih 3al id
  findedTeam: any; ///bech n7ot fih jdid
  x:any=[];
  constructor(private activatedRoute:ActivatedRoute,private teamService:TeamService) { }

  ngOnInit() {
    this.teamId = this.activatedRoute.snapshot.paramMap.get("id");
    //console.log(this.matchId);
    
    //data:reponse fiha par exemple message w pp a7na 7ajetna b pp
    this.teamService.getTeamById(this.teamId).subscribe((data)=>{
      console.log('here data',data.pp);
  this.findedTeam=data.pp
});


    //console.log(this.findedMatch);
  }

}
