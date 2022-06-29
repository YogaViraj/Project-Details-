import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hrprofile } from 'Models/hrprofile';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-hrprofile',
  templateUrl: './hrprofile.component.html',
  styleUrls: ['./hrprofile.component.css']
})
export class HrprofileComponent implements OnInit {

  userId:any;
  // data:any;
  profileDetails:any;

  constructor(private service:UserserviceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      console.log('User id : '+this.userId);
    })
    if(this.userId==undefined)
    this.getUserProfile();
    else
    this.getUserDetails(this.userId);

  }

  public data:Hrprofile[]=[
    
  ];
  getUserDetails(userId:number)
  {
    // console.log("11");
    // console.log(userId);
    this.service.getUserDetails(userId).subscribe( {
      next:(data:any)=>this.profileDetails=data
    })
  }
  getUserProfile(){
    this.service.getUserProfile().subscribe( {
      next:(data:any)=>this.profileDetails=data
    })
  }

}
