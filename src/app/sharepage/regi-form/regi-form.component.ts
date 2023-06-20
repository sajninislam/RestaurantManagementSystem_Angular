import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent implements OnInit{

  form: any = {
    username: null,
    userfullname: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { username, userfullname, email, password } = this.form;
    this.authService.register(username, userfullname, email, password).subscribe({
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
