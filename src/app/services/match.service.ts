import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  ////crier instance httpClient
  ///l adresse :@ serveur BE///interdit de utiliser l adresse front:  localhost:4200
 matchUrl: string = "http://localhost:3000/matches";  //REAl BE
  //matchUrl: string = "api/allMatches"; ////rod blk ml espace
  constructor(private httpClient: HttpClient) {
    ///yhezz request w yrajja3 reponse : cest un livreur
  }
  addMatch(obj) {
    ///matchform
    ///http: livreur /post :yab3ath ///matchUrl:ladresee
    return this.httpClient.post<{message:string}>(this.matchUrl, obj);
  }
  search(obj){
    //search kima add mn houni obj:1 ou
    return this.httpClient.post(`${this.matchUrl}/search`,obj);
    ///hya w add yemchou l nafs l adresse donc nzid klma exemple search
  }
  searchGet(obj) {
    //    return this.httpClient.get(this.matchUrl+"/"+ id);

    return this.httpClient.get<{pp:any}>(`${this.matchUrl}/${obj.staduim}`);
  }
  ///request to gett all matches from matchesurl(BE)
  getAllMatches() {
    ///allmatches
    return this.httpClient.get<{matches:any,message:any}>(this.matchUrl);
  }
  ///request to gett object by id(BE)

  getMatchById(id) {
    //    return this.httpClient.get(this.matchUrl+"/"+ id);

    return this.httpClient.get<{pp:any}>(`${this.matchUrl}/${id}`);
  }
 
  ///request to delete object By id from matchUrl(BE)

  deleteMatchById(id) {
    return this.httpClient.delete<{pp:any}>(`${this.matchUrl}/${id}`);
  }
  ///request to redit object by id
  updateMatch(obj) {
    //return this.httpClient.put(`${this.matchUrl}/${id}`,obj);
    return this.httpClient.put<{pp:any}>(`${this.matchUrl}/${obj._id}`, obj);
  }
///search score >3
searchScore(x) {
  return this.httpClient.post<{ match:any}>(`${this.matchUrl}/search`,x);
}
searchSc() {
  return this.httpClient.get<{ match:any}>(`${this.matchUrl}/searchSc`);
}


wather(obj) {
  return this.httpClient.get<{ wather:any}>(`${this.matchUrl}/${obj.ville}`);
}
 
}
