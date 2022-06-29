import { Component, OnInit } from '@angular/core';
import { Domain } from 'Models/domain';
import { Technology } from 'Models/technology';
import { Designation } from 'Models/designation';
import { College } from 'Models/college';
import { ProfileStatus } from 'Models/profilestatus';
import { UserserviceService } from 'src/app/service/userservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  designationValue:Designation[]=[];
  domainValue:Domain[]=[];
  technologyValue:Technology[]=[];
  collegeValue:College[]=[];
  profilestatusValue:ProfileStatus[]=[];
  
  DesignationValue:number=0;
  DomainValue:number=0;
  TechnologyValue:number=0;
  CollegeValue:number=0;
  ProfilestatusValue:number=0;


  Designation:any;
  Domain:any;
  Technology:any;
  College:any;
  ProfileStatus:any;
  Experiance:any;
  //experianceValue:Experiance[]=[];

  constructor(private FB: FormBuilder,private service:UserserviceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getDesignation();
    this.getDomain();
    this.getTechnology();
    this.getcollege();
    this.getprofilestatus();
  }
  getprofilestatus() {
    this.service.getDesignation().subscribe(data => this.designationValue=data);
  }
  getcollege() {
    this.service.getDesignation().subscribe(data => this.designationValue=data);
  }
  getDomain() {
    this.service.getDesignation().subscribe(data => this.designationValue=data);
  }
  getTechnology() {
    this.service.getDesignation().subscribe(data => this.designationValue=data);
  }

  getDesignation() {
    this.service.getDesignation().subscribe(data => this.designationValue=data);
  }

}
