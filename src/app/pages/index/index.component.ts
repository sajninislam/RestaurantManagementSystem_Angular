import { Component, OnInit } from '@angular/core';
import { ConserviceService } from '../contact/conservice.service';
import { Bookcus } from '../contact/post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  pp: Bookcus[] = [];
    

  constructor(public bookpostService: ConserviceService) { }
    

  ngOnInit(): void {
    this.bookpostService.getAll().subscribe((data: Bookcus[])=>{
      this.pp = data;
    })  
  }
    

  deletePost(id:number){
    this.bookpostService.delete(id).subscribe(res => {
         this.pp = this.pp.filter(item => item.id !== id);
    })
  }
  
  edits(tasks:any){
    this.pp = tasks;              
}

}
