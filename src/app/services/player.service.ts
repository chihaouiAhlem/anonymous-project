import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 // @ du serveur backend
 playerUrl:string="http://localhost:3000/players";/// na3mlou /player bech ybadel l puth

  constructor(private httpClient:HttpClient) { }
  addPlayer(obj,img:File){///allmatches
    let formData=new FormData;////tlm image wel objet
    ///nfarra9hom append cle tsob fiha valeur
    formData.append('name',obj.name);
    formData.append('position',obj.position);
    formData.append('number',obj.number);
    formData.append('age',obj.age);
    formData.append('img',img);
    return this.httpClient.post<{message}>(this.playerUrl,formData);
  }
  getAllPlayers(){///allmatches
    return this.httpClient.get<{players:any,title:string}>(this.playerUrl);
  }
  getPlayerById(id){
    //    return this.httpClient.get(this.matchUrl+"/"+ id);

   return this.httpClient.get<{pp:any,message:string}>(`${this.playerUrl}/${id}`);

  }
  deletePlayerById(id){
    return this.httpClient.delete<{message:string}>(`${this.playerUrl}/${id}`);

   }
   editPlayer(obj)
   {   
      return this.httpClient.put<{pp:any}>(`${this.playerUrl}/${obj._id}`,obj);
  }
}
