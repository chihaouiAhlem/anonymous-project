import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "http://localhost:3000/teams";  //REAl BE

  constructor(private httpClient: HttpClient) { }
  ///add team
  addTeam(obj) {
    ///matchform
    ///http: livreur /post :yab3ath ///matchUrl:ladresee
    return this.httpClient.post<{message:string}>(this.teamUrl, obj);
  }
  getAllTeams() {
    ///allmatches
    return this.httpClient.get<{teams:any,message:any}>(this.teamUrl);
  }
  ////get team by id
  getTeamById(id) {
    //    return this.httpClient.get(this.matchUrl+"/"+ id);

    return this.httpClient.get<{pp:any}>(`${this.teamUrl}/${id}`);
  }
  /////delete
  deleteTeamById(id) {
    return this.httpClient.delete<{pp:any}>(`${this.teamUrl}/${id}`);
  }
  ////update
  updateTeam(obj) {
    return this.httpClient.put<{pp:any}>(`${this.teamUrl}/${obj._id}`, obj);
  }




  //
  // searchByStuduim(obj) {
  //   ///matchform
  //   ///http: livreur /post :yab3ath ///matchUrl:ladresee
  //   return this.httpClient.post<{message:string}>(`${this.teamUrl}/search`, obj);
  // }
  ////search team avec meth post
  searchTeamByStadium(obj) {
    return this.httpClient.post<{ message:string,team:any}>(`${this.teamUrl}/search`, obj);
  }
  ///search team avec get
  searchByStaduimGet(obj) {
    return this.httpClient.get<{ message:string,team:any}>(`${this.teamUrl}/${obj.staduimm}`);
  }
}
