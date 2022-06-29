import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class PersonalServiceService {

constructor(private http : HttpClient) { }

private headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${AuthenticationService.GetData("token")}`
})

baseurl = "https://localhost:7021/Profile/";

getPersonalDetail(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetPersonalDetailsById?id=${id}`);
}

getPersonalDetailByProfileID(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetPersonalDetailsById?id=${id}`);
}

getallPersonalDetailByProfile( ) : Observable<any>{
  return this.http.get<any>(this.baseurl + 'GetallPersonalDetails');
}
UpdatePersonalDetail(data:any) : Observable<any>{
  return this.http.put<any>(this.baseurl + 'UpdatePersonalDetail',data);
}
}