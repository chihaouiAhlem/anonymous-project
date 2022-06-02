import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.css']
})
export class InfoPlayerComponent implements OnInit {
  @Input() K:any;

  constructor() { }

  ngOnInit() {
  }

}
