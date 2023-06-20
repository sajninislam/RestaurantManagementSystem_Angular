import { Component, OnInit } from '@angular/core';
import { OrderDetailsTsService } from 'src/app/services/order-details.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OrderDetailsTsService) { }
  foodData:any;
  isLoggedIn=false;
  ngOnInit(): void {
    
  }

}
