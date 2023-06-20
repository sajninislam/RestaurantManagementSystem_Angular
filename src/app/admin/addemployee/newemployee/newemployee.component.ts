import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit{
  form: any = {
    userfullname: null,
    username: null,
    email: null,
    password: null,
    branchName: null,
    empcatagoryname: null,
    phnumber: null,
    gender: null
    
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { userfullname, username, email, password, branchName, empcatagoryname, phnumber, gender} = this.form;
    this.authService.empregister(userfullname, username, email, password, branchName, empcatagoryname, phnumber, gender).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }



  popupClose(){
    this.isSuccessful = false;
    this.form =null;    

  }


}
