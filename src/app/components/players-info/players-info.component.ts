import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { allPlayers } from 'src/app/data/matchesData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {
  findedPlayer:any;
  playerId:any;
 // players=allPlayers;
  constructor(private activateRoute:ActivatedRoute ,private playerService:PlayerService) { }

  ngOnInit() {
    this.playerId = this.activateRoute.snapshot.paramMap.get("id");//FE  fil back twalli req.params.id
    // this.findedPlayer = this.players.find((obj: any) => {
    //   return obj.id == this.playerId;
    // });
    this.playerService.getPlayerById(this.playerId).subscribe((data)=>{console.log('here data',data.pp);
    this.findedPlayer=data.pp});

  }

}
