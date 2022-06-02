import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { allTeams } from 'src/app/data/matchesData';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
//teamsComponent :nom composant
export class TeamsComponent implements OnInit {
//les variables
//teams :variable de type any initialement un tab vide
teams:any=[];
//exmple
isValid:boolean=false;
searchForm:FormGroup;
obj:any={};
  constructor() { }
//methode qui s 'execute automat lors de l appel du component atravers son selector
  ngOnInit() {    //initialisation

/////nsob les objet fi westha
//this.teams=allTeams;
    
  }
  

}
