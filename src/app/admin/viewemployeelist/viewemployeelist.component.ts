import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewemployeelist',
  templateUrl: './viewemployeelist.component.html',
  styleUrls: ['./viewemployeelist.component.css']
})





export class ViewemployeelistComponent implements OnInit{

  


  UserListSearch:any;

  form: any = {
    userfullname: null,
    username: null,
    email: null,
    password: null,
    // branchName: null,
    // empcatagoryname: null,
    // phnumber: null,
    // gender: null

    role:[{
      roleName:""
    }]  
    
  };


  forms:any = {
    username: "",
    userfullname: "",
    email: "",
    password: "",
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  

  ngOnInit(): void {

    this.authService.getTasK().subscribe((res)=>{ 
      this.form = res;
    })
    
  }

  // onSubmit(): void {
  //   const { userfullname, username, email, password, branchName, empcatagoryname, phnumber, gender} = this.form;
  //   this.authService.empregister(userfullname, username, email, password, branchName, empcatagoryname, phnumber, gender).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
        
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  // }
  onSubmit(): void {
    const { username, userfullname, email, password } = this.forms;
    this.authService.register(username, userfullname, email, password).subscribe({

    
    });
  }
  

  popupClose(){
    this.isSuccessful = false;
    this.form =null;    

  }


  delete(task: any, status:boolean){
    this.authService.activeAndInactive(task,status ).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  deletes(task: any){
    this.authService.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }


   edits(tasks:any){
      this.forms = tasks;
              
  }
  
 

  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
  }


}
