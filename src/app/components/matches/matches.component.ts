import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { allMatches } from 'src/app/data/matchesData';////
import { JsonPipe } from '@angular/common';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  searchForm:FormGroup;
  matches: any = [];
  teamToFind:any;
  findedMatches:any=[];
  path:string;
  constructor( private router:Router ) { }

  ngOnInit() {
    this.path=this.router.url;////recupere tous l url
    //teamtofind={team: "valeur tapée dans search"}
    this.teamToFind = JSON.parse (localStorage.getItem('teamToFind'));
    //this.matches= allMatches;
    //search obj by team1 or team2
    for (let i = 0; i < this.matches.length; i++) {
      if ((this.matches[i].teamOne == this.teamToFind.team)  ||
      (this.matches[i].teamTwo == this.teamToFind.team) ) {
        this.findedMatches.push(this.matches[i]);
      }
    }
    //condition selon le path
    if (this.path == "/search-event") {
      this.matches = this.findedMatches;
    }
  }
}
//