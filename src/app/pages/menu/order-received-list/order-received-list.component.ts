import { Component, OnInit } from '@angular/core';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';
import { p_informationModel } from '../productInformation';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-received-list',
  templateUrl: './order-received-list.component.html',
  styleUrls: ['./order-received-list.component.css']
})
export class OrderReceivedListComponent implements OnInit{



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


  ngOnInit(): void {
    this.gerOrderServise.getOrder('Received').subscribe((res:any)=>{
      this.form = res;    
               
    })

    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      
      customerAddress: new FormControl(''),
      createdAt: new FormControl(''),
      OrderStatus: new FormControl(''),  
   
    });


}

group!:FormGroup;

update(){ 
  this.gerOrderServise.update(this.group.value).subscribe(()=>{
    alert("update successfully");
    this.ngOnInit();
  },(error)=>{alert("not update")})  
}

edit(valu:p_informationModel){
  this.group=new FormGroup({     
  id: new FormControl(valu.id),
  userName: new FormControl(valu.userName),
  customerAddress: new FormControl(valu.customerAddress),
  createdAt: new FormControl(valu.createdAt),
  OrderStatus: new FormControl(valu.orderStatus),

});
}


}
