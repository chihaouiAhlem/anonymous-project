import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 ///ma3andich l7a9 njib mn ts mta3 copm e5er
 ///njib ml bdd 
// autre jour njin e5er match tel3ab ml dbb par expml
 match :any={id:4,scoreOne:25,scoreTwo:12,teamOne:"EST",teamTwo:"CSS"};//t bech ne5dm bih info 

  constructor() { }

  ngOnInit() {
  }

}
