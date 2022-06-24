import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

constructor(private http : HttpClient) { }

baseurl = "https://localhost:7021/Profile/";

getProjectDetail(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetProjectDetailsById?Projectid=${id}`);
}

getProjectDetailByProfileID(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetProjectDetailsById?Profileid=${id}`);
}

getallProjectDetailByProfile( ) : Observable<any>{
  return this.http.get<any>(this.baseurl + 'GetallProjectDetails');
}
UpdateProjects(data:any) : Observable<any>{
  return this.http.put<any>(this.baseurl + 'UpdateProjects',data);
}
}
