import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserOrderServisesService } from '../services/user-order-servises.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{


  formBranchModel: any = {
    id: null,
    branchName: null,
    districtName: null,
    thanaName: null,
    email: null,
    phoneNumber: null,
    
  };

  formPending: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
    // p_senderAddress: null,

    // p_ReceiverName: null,
    // p_ReceiverGender: null,
    // p_ReceiverPhone: null,
    // p_ReceiverAddress: null,

    foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
    
  };

  formReceived: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
     foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
    
  };

  formOnTheWay: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
     foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
    
  };

  formCancel: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
     foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
    
  };

  formDelivered: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
     foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
    
  };

  formForAllOrder: any = {
    id: 0,
    cusName: null,
    customerAddress: null,
    customerPhNu: null,
     foodDetails: null,
    foodImg: null,
    foodName: 0,
    foodPrice: 0,
    quantity:0,
    userName: null,
    orderStatus: null,
 
  };

  formForAlluser: any = {
    id: 0,
    username: null,
    userfullname: null,
    email: null,
    password: null
  };


    form: any = {
      id: null,
      branchName: null,
      districtName: null,
      thanaName: null,
      areaName: null,
      email: null,
      phoneNumber: null,
      
    };
  
    forms: any = {
      userfullname: null,
      username: null,
      email: null,
      password: null,
      branchName: null,
      empcatagoryname: null,
      phnumber: null,
      gender: null
      
    };
  
    constructor(private AddnewBranchservise:AuthService, 
      private authservic:AuthService , private OrderServise:UserOrderServisesService){}
    
    ngOnInit(): void {
      this.AddnewBranchservise.getTasK().subscribe((res)=>{

        this.formBranchModel = res;

        // this.form = res;
        console.log(this.form.role);
        
      })
  
      this.authservic.getTasK().subscribe((res)=>{
        this.formForAlluser = res;
        // this.forms = res;
      })


      this.OrderServise.getOrder('Pending').subscribe((res:any)=>{
        this.formPending = res;    
                 
      })
      this.OrderServise.getOrder('Received').subscribe((res:any)=>{
        this.formReceived = res;    
                 
      })
      this.OrderServise.getOrder('OnTheWay').subscribe((res:any)=>{
        this.formOnTheWay = res;    
                 
      })
      this.OrderServise.getOrder('Cancel').subscribe((res:any)=>{
        this.formCancel = res;    
                 
      })
      this.OrderServise.getOrder('Delivered').subscribe((res:any)=>{
        this.formDelivered = res;    
                 
      })
  
      this.OrderServise.getOrder(null).subscribe((res)=>{
        this.formForAllOrder = res;
      })
  
  
  
    }
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
  
      this.AddnewBranchservise.clean();
  
      window.location.reload();
    }
  
  }

