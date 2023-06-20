import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css']
})
export class ParcelDetailsComponent implements OnInit{
  constructor(private gerOrderServise:UserOrderServisesService, private storageService: StorageService 
    ){}
  form!:any;

  username?: string;
  ngOnInit(): void {
    // console.log(this.username+"aaaaa");
    // const user = this.storageService.getUser();
    // this.username = user.userName;
    // console.log(this.username+"fffff");
    

    this.gerOrderServise.getOrders(this.username).subscribe((res:any)=>{
      this.form = res;  
      console.log(this.form+"aaaa");  
               
    });
   
  }

}
