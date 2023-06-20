import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{


  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string=''


  constructor(private authService: AuthService, private storageService: StorageService,private rout:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
        next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;
        const user = this.storageService.getUser();
        this.username = this.storageService.getUser().userName;
        
              //  this.reloadPage();

              console.log('roles---',this.roles[0].roleName);
              if(this.roles[0].roleName==="ROLE_ADMIN"){
                this.rout.navigateByUrl('/admins/admindashboard');
              }else{
                this.rout.navigateByUrl('/menu');
              }

       
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }



  reloadPage(): void {
    window.location.reload();
  }


}
