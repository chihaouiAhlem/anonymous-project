import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { allMatches } from 'src/app/data/matchesData';////


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  matches: any=[];
searched:any = { };
  constructor() { }

  ngOnInit() {
    //this.matches=allMatches;

  }
 search(){   
   // console.log(this.searched);
    console.log(this.searched);

 }
}
