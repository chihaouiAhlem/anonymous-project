import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class UserService {
  userUrl:string="http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }
  signUpUser(obj,img:File){ ///
    let formData=new FormData;////tlm image wel objet
    formData.append('firstName',obj.firstName);
    formData.append('lastName',obj.lastName);
    formData.append('email',obj.email);
    formData.append('password',obj.password);
    formData.append('img',img);
     return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/signUp`,formData);
  }
  getAllUsers(){///allmatches
    return this.httpClient.get(this.userUrl);
  }
  getUserById(id){
    //    return this.httpClient.get(this.matchUrl+"/"+ id);

   return this.httpClient.get(`${this.userUrl}/${id}`);

  }
  deleteUserById(id){
    return this.httpClient.delete(`${this.userUrl}/${id}`);

   }
   loginUser(obj)
   {    return this.httpClient.post<{message:string}>(`${this.userUrl}/login`,obj);
  }
  logOut(obj)
   {    //return this.httpClient.get(`${this.userUrl}/${id}`);
  }
}
