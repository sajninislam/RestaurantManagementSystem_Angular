import { Component } from '@angular/core';

@Component({
  selector: 'app-addbranches',
  templateUrl: './addbranches.component.html',
  styleUrls: ['./addbranches.component.css']
})
export class AddbranchesComponent {


   
  btnNumber:number = 2;
  buttonColor(btn: number){
    this.btnNumber = btn    
   }


}
