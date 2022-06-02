import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllTeamsService {

 
  
    allTeamsUrl: string = "http://localhost:3000/allTeams";  //REAl BE
    //matchUrl: string = "api/allMatches"; ////rod blk ml espace
    constructor(private httpClient: HttpClient) {
      ///yhezz request w yrajja3 reponse : cest un livreur
    }
  
    getAllTeams(obj) {
      return this.httpClient.post<{ result:any}>(`${this.allTeamsUrl}`,obj);
    }
  
  
  
  
  
  
}
