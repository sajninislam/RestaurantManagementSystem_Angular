import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';
import { p_informationModel } from '../productInformation';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-view-list',
  templateUrl: './order-view-list.component.html',
  styleUrls: ['./order-view-list.component.css']
})
export class OrderViewListComponent implements OnInit{

  public products : any = [];
  public grandTotal: number = 0;
  

   
  forms!:p_informationModel[];
    oderHeader:string="";
  isDescOrder:boolean=true;



  cartItem=[];

  constructor(private gerOrderServise:UserOrderServisesService, private storageService: StorageService,
    private cartService : CartServiceService,
    private rout:ActivatedRoute 
    ){}

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
    }


  

    


    id=0;

    form!:any;

    username?: string;
    UserListSearch:any;
    group!:FormGroup;


  ngOnInit(): void {
   this.form= this.cartService.getCash();



   const user = this.storageService.getUser();
   this.username = user.userName;

   this.gerOrderServise.getOrders(this.username).subscribe((res:any)=>{
     this.form = res;    
              
   })


   this.group=new FormGroup({
    id: new FormControl(),
    userName: new FormControl(''),
    
    customerAddress: new FormControl(''),
    availableDate: new FormControl(''),
    orderStatus: new FormControl(''),  
  });



 
  
 
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   console.log( this.products+"cccccccccccc");
    //   console.log( this.products+"qqqqqqqqqqqq");
    //   this.grandTotal = 0;

    //   this.products.map((a:any)=>{
    //     this.grandTotal =  this.grandTotal + a.foodPrice;
    //   })

    //   // this.grandTotal = this.cartService.getTotalPrice();
    //   console.log( this.grandTotal);
      
    // })

    // this.id=this.rout.snapshot.params['id'];
    // alert(this.id+"cccc")
    // this.ser.getSingleQuiz(this.id).subscribe((data:any)=>{
    //   this.form=data;
    //   alert(this.form+"comes data")
    // },(error)=>{
    //   alert("somthing mis"+error)
    // })
    
    // const user = this.storageService.getUser();
    // this.username = user.userName;

    // this.gerOrderServise.getOrders(this.username).subscribe((res:any)=>{
    //   this.form = res;    
               
    // })


}

del(valu:any){
  this.gerOrderServise.delTracking(valu).subscribe(()=>{
    alert("Deleted successfully")
    this.ngOnInit();
  },(error)=>{alert(error+"not deleted")})
 
}

edit(valu:p_informationModel){
    this.group=new FormGroup({     
    id: new FormControl(valu.id),
    userName: new FormControl(valu.userName),
    
    customerAddress: new FormControl(valu.customerAddress),
    availableDate: new FormControl(valu.availableDate),
    orderStatus: new FormControl(valu.orderStatus),
  });
}

update(){ 
    this.gerOrderServise.update(this.group.value).subscribe(()=>{
      alert("update successfully");
      this.ngOnInit();
    },(error)=>{alert("not update")})  
}


viewPdf(valu:any){
  // console.log(valu);
  
  // this.gerCourierServise.getTracking(valu).subscribe((res)=>{

  //   this.Data = res;
  //   alert("successfull")
  //   this.ngOnInit();
  // },(error)=>{alert(error+"not succesfull")})
  this.gerOrderServise.getTracking(valu)

}




}



