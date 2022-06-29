import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from 'Models/user';
import { PersonalDetails } from 'Models/personalDetails';
import { FormBuilder } from '@angular/forms';
import { PersonalServiceService } from 'src/app/service/personal-service.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
 // @Input() artsrc: string = " ";
  //data: any;
  personalDetails: any;
  imageError!: string;
  Name: any;
  Objective: any;
  Dateofbirth:any;
  Nationality: any;
  Dateofjoining:any;
  Email:any;
  LanguageValue: string='';
  BreakdurationValue: string='';
  SocialmediaValue:string='';

  constructor(private FB: FormBuilder, private service: PersonalServiceService, private http: HttpClient) { }

  personal : any= {
    personalDetailsId:0,
    objective: '',
    name:'',
    dateOfBirth: '',
    nationality: '',
    mailAddress: '',
    dateOfJoining:'',
    languageid: 0,
    breakDurationid: 0,
    socialmediaid:0,

    createdOn:  Date.now,
    createdBy: 1,
    updatedOn: Date.now,
    updatedBy: 0,
    userId: 0,
    
    // language: Language | null,
    // breakDuration: BreakDuration | null,
    // socialmedia: SocialMedia | null,
    // education: Education[] | null;
    // projects: Projects[] | null;
    // skills: Skills[] | null;
    // users: User | null,
    isActive: true,
  }

  personaldata()
  {
    var personalDetails: any={
      "personalDetailsId": 0,
      "name": this.Name,
      "objective": this.Objective,
      "dateOfBirth": this.Dateofbirth,
      "nationality": this.Nationality,
      "mailAddress": this.Email,
      "dateOfJoining": this.Dateofjoining,
      "languageid": this.LanguageValue,
      "breakDurationid": this.BreakdurationValue,
      "socialmediaid": this.SocialmediaValue,
    };

    const headers={'content-type':'application/json'}
    console.log(this.personal)
    this.http.post<any>('https://localhost:7021/Profile/AddPersonal',this.personal,{headers:headers})
    .subscribe((data)=>{
      console.log(data)
    });
  }

  ngOnInit(): void {
    // this.http
    //   .get<any>(this.artsrc)
    //   .subscribe((data) => {
    //     this.data = data;
    //     this.totalLength = data.length;
    //     console.log(data);
    //   });
  }

  public data: PersonalDetails[] = [

  ];


  fileChangeEvent(fileInput:any){
    // this.imageError="";

    if(fileInput.target.files&& fileInput.target.files[0]){

      const max_size = 20971520;
      const allowed_type = ['image/jpeg', 'image/png'];
      if(fileInput.target.files[0].size > max_size){
         this.imageError = 'maximum file size allowed is '+max_size / 1000 +'Mb';

        return false;
      }
      console.log(fileInput.target.files[0].type)

      if(!allowed_type.includes(fileInput.target.files[0].type)){
        // this.imageError = 'Only images are allowed (either JPG or PNG)';
        return false;
      }

      const reader = new FileReader();
      reader.onload = (e:any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs =>{

          const imgBase64Path = e.target.result;
          // this.cardImageBase64 = imgBase64Path;
          // this.isImageSaved = true;
          console.log(imgBase64Path)
          console.log(image.src)
        }
      };


      reader.readAsDataURL(fileInput.target.files[0]);
    } return false;
    
  }
}