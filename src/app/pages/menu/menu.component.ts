import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { OrderDetailsTsService } from 'src/app/services/order-details.ts.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  // constructor(private service:OrderDetailsTsService) { }
  // foodData:any;
  // ngOnInit(): void {
  //   this.foodData = this.service.foodDetails;
  // }


isLoggedIn=false;
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartServiceService,private service:OrderDetailsTsService,private storageService:StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(this.isLoggedIn){
      this.isLoggedIn=true;
    }


    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="menu" || a.category ==="menu"){
          a.category ="menu"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log("sajnin hhhh"+this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

    this.filterCategory = this.service.foodDetails;

  }
  addtocart(item: any){
    item.quantity = 1;
    item.total = item.foodPrice;
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }




}
