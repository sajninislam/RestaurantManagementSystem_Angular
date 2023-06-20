import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';
import { p_informationModel } from '../productInformation';

@Component({
  selector: 'app-view-cancel-list',
  templateUrl: './view-cancel-list.component.html',
  styleUrls: ['./view-cancel-list.component.css']
})
export class ViewCancelListComponent implements OnInit{

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
    this.gerOrderServise.getOrder('Cancel').subscribe((res:any)=>{
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


}
