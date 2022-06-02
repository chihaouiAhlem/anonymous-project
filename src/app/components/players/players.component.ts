import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
//import { allPlayers } from 'src/app/data/matchesData';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players :any = [];

  constructor(private  playerService:PlayerService) { }
  ngOnInit() {
  //  this.players = allPlayers;
   // alert(this.players.value);
   this.playerService.getAllPlayers().subscribe((response) =>{
    this.players = response.players;
   // this.title = response.response;
    
   });



  }

}
