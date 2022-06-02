import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatherService {

  watherUrl: string = "http://localhost:3000/weathers";  //REAl BE
  //matchUrl: string = "api/allMatches"; ////rod blk ml espace
  constructor(private httpClient: HttpClient) {
    ///yhezz request w yrajja3 reponse : cest un livreur
  }

  wather(obj) {
    return this.httpClient.post<{ result:any}>(`${this.watherUrl}/`,obj);
  }




}
