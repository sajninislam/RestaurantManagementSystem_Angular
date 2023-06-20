import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventBusService } from 'src/app/services/event-bus.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: any[] = [{roleName:'', roleDescription:''}];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showNormalBoard = false;
  isNab= true;

  username?: string;

  eventBusSub?: Subscription;
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor( private cartService : CartServiceService,
    
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    
    // this.isLoggedIn = this.storageService.isLoggedIn();
    this.storageService.getLogin().subscribe(res=>{
      console.log('-------Login--------',res);

      this.isLoggedIn = res
    })

    this.storageService.getUserName().subscribe(res=>{
      console.log('-------User?Name--------',res);
      this.username = res
    });
   
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      console.log("USer---",user.role)
      this.roles = user.role;
      
      // this.username = user.userName;

      if(this.roles.some(item => item.roleName === 'ROLE_ADMIN')){
        this.router.navigateByUrl('admins/admindashboard');
        this.isNab = false;
      
      }
      if(this.roles.some(item => item.roleName === 'User')){
        this.router.navigateByUrl('homePage');
    
      }
      if(this.roles.some(item => item.roleName === 'Employee')){
        this.router.navigateByUrl('');
    
      }
      

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // if(this.showAdminBoard = this.roles.some(item => item.roleName === 'ROLE_ADMIN')){
      // this.router.navigateByUrl('../admins/dashboard');
      // }
      // console.log('ROLE_ADMIN---',this.roles.some(item => item.roleName === 'ROLE_ADMIN'))

      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      // this.showModeratorBoard = this.roles.some(item => item.roleName === 'ROLE_MODERATOR')
      // console.log('ROLE_MODERATOR---',this.roles.some(item => item.roleName === 'ROLE_MODERATOR'))
      
      // this.showNormalBoard = this.roles.some(item => item.roleName === 'User');

     
    }


    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }; 
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    // this.cartService.search.next(this.searchTerm);
  }


 

  // constructor(
  //   private storageService: StorageServiceService,
  //   private authService: AuthServiceService,
  //   private eventBusService: EventBusServiceService,
  //   private router: Router

  // ) {}

 
   

  logout(): void {
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();

    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });

    this.storageService.clean();

    window.location.reload();
  }

  reloadPage(): void {
    window.location.reload();
  }

}


