import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit{
  constructor(private acrout:ActivatedRoute){}
  cid:any;
  ngOnInit(): void {
    this.cid=this.acrout.snapshot.params['id'];
    console.log(this.cid+"cccc");
    
   
  }

}
