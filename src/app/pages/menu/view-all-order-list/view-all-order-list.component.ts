import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserOrderServisesService } from 'src/app/services/user-order-servises.service';
import { p_informationModel } from '../productInformation';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-all-order-list',
  templateUrl: './view-all-order-list.component.html',
  styleUrls: ['./view-all-order-list.component.css']
})
export class ViewAllOrderListComponent implements OnInit{


  constructor(private gerOrderServise:UserOrderServisesService, private storageService: StorageService
    ){}

    pro!:p_informationModel[];

    // form!:products[];
    // public products : any = [];
  
    UserListSearch:any;

    oderHeader:string="";
    isDescOrder:boolean=true;

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
    }

  group!:FormGroup;

  ngOnInit(): void {

this.gerOrderServise.getAll().subscribe((abc:p_informationModel[])=>{this.pro=abc})

    this.gerOrderServise.getOrder(null).subscribe((res:any)=>{
      this.pro = res;   
      console.log('pro', this.pro);
      
       
    });
    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      customerPhNu: new FormControl(''),
      customerAddress: new FormControl(''),
      createdAt: new FormControl(''),
      orderStatus: new FormControl(''),  
    });   
            
  
  }

  // title ='pagination'
  // POSTS:any;
  // page:number =1;
  // count:number =0;
  // tableSize:number =5;
  // tableSizes:any=[5,10,15,20];

  // onTableSizechange(event:any){
  //   this.page= event;
  //   this.pro;
  // }

  // pagenUmber(){
  //   this.tableSize
  // }

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

      // CuName: new FormControl(valu.CuName),

      customerPhNu: new FormControl(valu.customerPhNu ),
      customerAddress: new FormControl(valu.customerAddress),
      orderStatus: new FormControl(valu.orderStatus),
      createdAt: new FormControl(valu.createdAt),

    });
  }

  update(){ 
      this.gerOrderServise.update(this.group.value).subscribe(()=>{
        alert("update successfully");
        this.ngOnInit();
      },(error)=>{alert("not update")})  
  }




}
