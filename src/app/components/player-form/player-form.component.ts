import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";
//import { allPlayers } from 'src/app/data/matchesData';

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
  styleUrls: ["./player-form.component.css"],
})
export class PlayerFormComponent implements OnInit {
  playerForms: FormGroup;
  player: any = {};
  title: any = "ADD";
  // players:any=allPlayers;
  playerId: any;
  imagePreview: any;

  constructor(
    private activeteddRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.playerForms = this.formBuilder.group({
      name:[""],
      number: [""],
      position: [""],
      age: [""],
      img: [""]
    });
    this.playerId = this.activeteddRoute.snapshot.paramMap.get("id");
    //search match by id t3awdh boucle for
    //obj var locale
    if (this.playerId) {
      this.title = "Edit ";
      /// this.findedMatch=this.matches.find((obj)=>{return obj.id==this.matchId;})
      ///marra ye5ou match m3abbi marra fera4
      // this.player=this.players.find(obj =>{return obj.id ==this.playerId})
      // alert('here into edit');
      this.playerService.getPlayerById(this.playerId).subscribe((data) => {
        this.player = data.pp;
      });
    }
  }
  ///add orEdit
  validate() {
    console.log("here my player", this.player);
    if (this.playerId) {
      ////call service to update player.find

      this.playerService.editPlayer(this.player).subscribe((data) => {
        // message:data.message;
        this.router.navigate([`admin`]);
      });
    } else {
      ////call service to send math.find
      this.playerService.addPlayer(this.player,this.playerForms.value.img).subscribe((data) => {
        //message:data.message;
        this.router.navigate([`admin`]);
      });
    }
  }

  ///
  onImageSelected(event: Event) {
    //files[0] :une seul selection
    ///if(file.size)
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForms.patchValue({ img: file });
    this.playerForms.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      ///imagePreview:image selectionnee

      ////ybadel image en string
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
