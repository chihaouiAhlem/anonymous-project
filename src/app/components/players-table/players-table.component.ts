import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
//import { allPlayers } from 'src/app/data/matchesData';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any=[];
  title:string;
  x:string;
  pageOfItems: Array<any>;

  constructor(private router :Router,private playerService:PlayerService) { 
    ///nesta3mlouh ki yebda route parametre
  }

  ngOnInit() {


    this.allPalyers();
  }


  goToDisplay(param:any){
    this.router.navigate([`playersInfo/${param}`]);
}

goToEdit(param: number) {
  // location.replace non ta3ml reload
  this.router.navigate([`editPlayer/${param}`]);//najmou nhezou tableau//matchInfo howa path //
}
///delete player
deletePlayerById(param: number) {
this.playerService.deletePlayerById(param).subscribe((response)=>{
  this.x=response.message;
  this.allPalyers();///ba3d delete n3aytou l getallPlayers
});

}






////fonction dont j ai fait appel dans onInit et apres delete
allPalyers(){
  this.playerService.getAllPlayers().subscribe((response) => {
    this.players = response.players;
    this.title=response.title;///matches loula tableau vide declaree matches2 :ili ja ml BE

  });
}


onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }
}
