import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddnewbranchService } from 'src/app/services/addnewbranch.service';
import { BangladeshServiceService } from 'src/app/services/bangladesh-service.service';
import { Districts } from '../newbranch/districts';
import { Upazilas } from '../newbranch/upazila';

@Component({
  selector: 'app-viewbranchlist',
  templateUrl: './viewbranchlist.component.html',
  styleUrls: ['./viewbranchlist.component.css']
})
export class ViewbranchlistComponent implements OnInit{

  UserListSearch:any;

  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
  }
  
  form: any = {
    id: 0,
    branchName: null,
    districtName: null,
    thanaName: null,
    areaName: null,
    email: null,
    phoneNumber: null,
    
  };

  forms:any = {
    id: 0,
    branchName: "",
    districtName: "",
    thanaName: "",
    areaName: "",
    email: "",
    phoneNumber: "",
  };

  constructor(private servise:AddnewbranchService, private bangladesh:BangladeshServiceService, private router: Router){}
  
  listOfdistricts!:Districts[];


  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{
      this.form = res;
    })
    this.bangladesh.getDistricts().subscribe((res: any)=>{
      this.listOfdistricts = res;
    })

  }

  isUpazilas!:Upazilas[];

  changeUpazilas(id:any){
       this.bangladesh.getUpazilas(id).subscribe((res:any)=>{
        this.isUpazilas = res;  
        })  
  }



  delete(task: any){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  edit(task:any){
    this.forms =task;
  }


  udpdate(){   
this.servise.brchUpdate(this.forms).subscribe((res)=>{
  // this.router.navigateByUrl('/admins/branch/BranchList');
 
})


  }

  title ='pagination'
  POSTS:any;
  page:number =1;
  count:number =0;
  tableSize:number =5;
  // tableSizes:any=[5,10,15,20];

  onTableSizechange(event:any){
    this.page= event;
    this.form;
  }
  pagenUmber(){
    this.tableSize
  }



}
