import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private url="http://localhost:8080/api/book";

  constructor(private http:HttpClient, private storageService: StorageService) { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  saveCart(product : any, cusName: string, cusPhnu: string, cusAddress: string, cusPaymentM: string){

    console.log("UserName-------------------",this.storageService.getUser());
   const username: any = this.storageService.getUser().userName;
    
    return this.http.post(this.url+"?userName="+username+"&customerName="+cusName+"&customerPhNu="+cusPhnu+"&customerAddress="+cusAddress+"&PaymentMethod="+cusPaymentM, product);
  }
  //for cash memory start
  saveCash(product:any):void{
    window.sessionStorage.removeItem('session');
   window.sessionStorage.setItem('session', JSON.stringify(product));
  }
  getCash():void{
   
   window.sessionStorage.getItem('session');
  }

    //for cash memory end

}
