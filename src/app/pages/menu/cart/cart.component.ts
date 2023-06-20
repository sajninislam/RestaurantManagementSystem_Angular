import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public products : any = [];
  public grandTotal: number = 0;



  cartItem=[]; // for car list show

  constructor(private cartService : CartServiceService,private rout:Router) { }
  form!:FormGroup;

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log( this.products+"cccccccccccc");
      console.log( this.products+"qqqqqqqqqqqq");
      this.grandTotal = 0;

      this.products.map((a:any)=>{
        this.grandTotal =  this.grandTotal + a.foodPrice;
      })

      // this.grandTotal = this.cartService.getTotalPrice();
      console.log( this.grandTotal);
      
    })
  }

  viewOrder(){
  //  this.rout.navigateByUrl('/OrderViewList')

  this.saveValue();

  window.print();
  };


  removeItem(item: any){
    this.cartService.removeCartItem(item);
    console.log(this.grandTotal);
    
    // this.cartItem.forEach( (item , index) => {
    //   if(item.mId === mId){
    //     //--remove as qty on cartItem
    //     let n=0;
    //     for(n; n < item.qty; n++){
    //       this.add2cart('minus', item.data);
    //     }
    //     this.cartItem.splice(index, 1); //--remove 1 list
    //   }
    // });
    // this.grandTotal =  this.grandTotal - item.foodPrice;
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  minus(item: any){
    //--add new item
    this.add2cart('minus', item);
    //--reload this
    this.ngOnInit()
  }
  plus(product:any){
    //--add new item
    this.add2cart('plus', product);
    //--reload this again
    this.ngOnInit()
  }

  add2cart(type: string,product:any){
    // if(type === 'plus'){
    //   product.quantity +=1; 
    //   this.products.filter((a:any) =>{

    //   })
    //   // this.cart.products.push(product);
    //   // this.cart.cart = this.cart.cart + 1; //cart qty

    //   //--part Cart Summary
    //   //--set in data service
    //   let _price = product.pPriceSale ? product.pPriceSale : product.pPrice; //check if have pricesale
    //   this.cart.subTotal = this.cart.subTotal + _price;
    //   this.cart.grandTotal = this.cart.subTotal + this.cart.shippingCost;


    // }else{
    //   //--minus
    //   //--remove from cart
    //   if(this.cart.products.findIndex(obj => obj.pId === product.pId) >= 0){ //--if not found it retun -1
    //     // console.log('index-sss-', this.cart.products.findIndex(obj => obj.pId === product.pId));
    //     let tmpIndex = this.cart.products.findIndex(obj => obj.pId === product.pId);
    //     // arr.splice(index, 1);
    //     this.cart.products.splice(tmpIndex, 1); //--remove 1 list
    //     this.cart.cart = this.cart.cart - 1; //--minus cart count

    //     //--part Cart Summary
    //     //--set in data service
    //     let _price = product.pPriceSale ? product.pPriceSale : product.pPrice;
    //     this.cart.subTotal = this.cart.subTotal - _price;
    //     this.cart.grandTotal = this.cart.subTotal + this.cart.shippingCost;

    //   }
    // }
    // this.dataService.updateCart(this.cart);

    // console.log('this.cart--', this.cart);
  }



cusName: string="";
cusPhNo: string="";
cusAddress: string="";
cusPaymentM: string="";
  orderStatus:string="";
    createdAt:string="";


  saveValue(){
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = 0;

    //   this.products.map((a:any)=>{
    //     this.grandTotal =  this.grandTotal + a.foodPrice;
    //   })

      // this.grandTotal = this.cartService.getTotalPrice();

      
        console.log( this.products+"sss");
        this.cartService.saveCart(this.products, this.cusName, this.cusPhNo, this.cusAddress, this.cusPaymentM).subscribe(()=>{
          alert("Order confirm successfully ok");
          // this.rout.navigateByUrl('/OrderViewList')
          this.cartService.removeAllCart()
        })
        this.cartService.saveCash(this.products);
          alert("Order confirm successfully ok");
          // this.rout.navigateByUrl('/OrderViewList')
          this.cartService.removeAllCart()
        
      
    // })
  }



}
