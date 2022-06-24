import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/ProjectService.service';

@Component({
  selector: 'app-ViewProjectdetails',
  templateUrl: './ViewProjectdetails.component.html',
  styleUrls: ['./ViewProjectdetails.component.css']
})
export class ViewProjectdetailsComponent implements OnInit {

  constructor(private projectService : ProjectServiceService) { }
 
  projectId : number = 11;
  profileId : number = 4;
 
  data : any ;
  ngOnInit() {
    this.getProjectbyId();
  }
  getProjectbyId(){
    this.projectService.getProjectDetail(this.projectId).subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    })
  }
  
//   getallProjectdetails(){
//     this.projectService.getallProjectDetailByProfile().subscribe((res)=>{
//       this.data = res;
//       console.log(this.data);
//   })
//  }

//  GetAllProjectDetailsByProfileId(){
//   this.projectService.getProjectDetailByProfileID(this.profileId).subscribe((res)=>{
//     this.data = res;
//     console.log(this.data);
// })
// }

OnSubmit(){
  console.log(this.data);
  this.data.profileId=this.profileId;
  this.projectService.UpdateProjects(this.data).subscribe((res)=>{
    console.log(res);
})
}

}
