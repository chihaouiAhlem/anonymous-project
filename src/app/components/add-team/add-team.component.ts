import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
teamForm:FormGroup;
team:any={};
  constructor(private teamService:TeamService,private router:Router) { }

  ngOnInit() {
  }
addTeam(){
  this.teamService.addTeam(this.team).subscribe(
    (data)=>{
     // console.log('here data after add',data.message);
      this.router.navigate([`admin`]);
    }
  );
  console.log("here my fct add",this.team);

}
}
