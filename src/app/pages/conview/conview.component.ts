import { Component, OnInit } from '@angular/core';
import { ConserviceService } from '../contact/conservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookcus } from '../contact/post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-conview',
  templateUrl: './conview.component.html',
  styleUrls: ['./conview.component.css']
})
export class ConviewComponent implements OnInit{

  // form: any = {
  //   name: null,
  //   email: null,
  //   phnumber: null,
  //   bookingDate: null,
  //   bookingTime: null,
  //   comingTime: null,
  //   guest: null,
  //   role:[{
  //     roleName:""
  //   }]  
  // };

  // constructor(private servise:AuthService){}
  
  // ngOnInit(): void {
  //   this.servise.getTasK().subscribe((res)=>{ 
  //     this.form = res;
  //     console.log(this.form);

  //   })
  // }



  // delete(task: any){
  //   this.servise.delete(task).subscribe((res)=>{
  //     this.ngOnInit();
  //   })
  // }







//   view!:Post[];


//   constructor(
//     public postService: ConserviceService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }



//   ngOnInit(): void {
//     this.postService.getTask().subscribe((abc:Post[])=>{this.view=abc})
//     console.log(this.view)
//   }

//   deletePost(id:number){
// this.postService.deleteTask(id).subscribe(res=>{
// this.view=this.view.filter(item=>item.id !==id);

// })

//   }

//   myfunction(){
//     this.postService.getTask().subscribe((abc:Post[])=>{this.view=abc});
//     console.log(this.view);

//   }

id!: number;
post!: Bookcus;

constructor(
  public bookpostService: ConserviceService,
  private route: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  this.post = {
    id: 0,
    name: '',
    email: '',
    phnumber: '',
    bookingDate: '',
    bookingTime: '',
    comingTime: '',
    guest: 0,
    
    
  };
  this.id = this.route.snapshot.params['postId'];
  this.bookpostService.find(this.id).subscribe((data: Bookcus) => {
    this.post = data;
  });
}

}



