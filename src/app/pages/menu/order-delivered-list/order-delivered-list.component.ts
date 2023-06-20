import { Component, OnInit } from '@angular/core';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';
import { p_informationModel } from '../productInformation';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-delivered-list',
  templateUrl: './order-delivered-list.component.html',
  styleUrls: ['./order-delivered-list.component.css']
})
export class OrderDeliveredListComponent implements OnInit{



  constructor(private gerOrderServise:UserOrderServisesService, 
    ){}

    form!:p_informationModel[];
    UserListSearch:any;
    oderHeader:string="";
    isDescOrder:boolean=true;

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
    }

    // title ='pagination'
    // POSTS:any;
    // page:number =1;
    // count:number =0;
    // tableSize:number =5;
    // tableSizes:any=[5,10,15,20];
  
    // onTableSizechange(event:any){
    //   this.page= event;
    //   this.form;
    // }
  
    // pagenUmber(){
    //   this.tableSize
    // }
    group!:FormGroup;


  ngOnInit(): void {
    this.gerOrderServise.getOrder('Delivered').subscribe((res:any)=>{
      this.form = res;    
               
    })

    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      customerAddress: new FormControl(''),
      createdAt: new FormControl(''),
      orderStatus: new FormControl(''),  
    });

}


}




