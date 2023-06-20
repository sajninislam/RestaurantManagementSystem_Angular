import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  UserListSearch:any;

  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
  }



  form: any = {
    userName: null,
    userFullName: null,
    email: null,
    password: null,
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



  constructor(private servise:AuthService){}



  isEnable(task: any, status:boolean){
    this.servise.activeAndInactive(task,status ).subscribe((res)=>{
      this.ngOnInit();
    })
  }
  
  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{ 
      this.form = res;
      console.log(this.form);

    })
  }



  delete(task: any){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }


  edits(tasks:any){
    this.forms = tasks;              
}

isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';



onSubmit(): void {
  const { username, userfullname, email, password } = this.forms;
  this.servise.register(username, userfullname, email, password).subscribe({

  
  });
}



}
