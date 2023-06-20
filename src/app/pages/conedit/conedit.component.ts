import { Component, OnInit } from '@angular/core';
import { Bookcus } from '../contact/post';
import { ConserviceService } from '../contact/conservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conedit',
  templateUrl: './conedit.component.html',
  styleUrls: ['./conedit.component.css']
})
export class ConeditComponent implements OnInit{

//   id!: number;
//   edit!: Post;

//  constructor(
//     public postService: ConserviceService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }


//     Form: FormGroup = new FormGroup({
//     id: new FormControl(),
//     name: new FormControl(),
//     email: new FormControl(),
//     phnumber: new FormControl(),
//     bookingDate: new FormControl(),
//     bookingTime: new FormControl(),
//     comingTime: new FormControl(),
//     guest: new FormControl()


//   })


//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['postId']
//     this.postService.find(this.id).subscribe((data: Post) => {
//       this.edit = data;
//       console.log(this.edit );
//       // this.Form.setValue(this.post);



//       this.Form = new FormGroup({
//         id: new FormControl(this.edit.id),
//         name: new FormControl(this.edit.name),
//         email: new FormControl(this.edit.email),
//         phnumber: new FormControl(this.edit.phnumber),
//         bookingDate: new FormControl(this.edit.bookingDate),
//         bookingTime: new FormControl(this.edit.bookingTime),
//         comingTime: new FormControl(this.edit.comingTime),
//         guest: new FormControl(this.edit.guest)
//       })
//     });


//   }

//   submit() {

//     console.log(this.Form.value)
//     this.Form.value.id = this.id;
//     this.postService.update(this.Form.value).subscribe((res: any) => {
//       this.router.navigateByUrl('/dash/adhome')
//     })
//   }


id!: number;
  post!: Bookcus;
  postList!: Bookcus[];
  form!:FormGroup;



  constructor(
    public bookpostService: ConserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
 
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['postId'];
    // console.log('iddddddd',this.id);
    
    this.bookpostService.find(this.id).subscribe((data: Bookcus)=>{
      this.post = data;
      this.form.setValue(this.post);



      // this.form = new FormGroup({
      //   id: new FormControl(this.post.id),
      //   name: new FormControl(this.post.name),
      //   email: new FormControl(this.post.email),
      //   phnumber: new FormControl(this.post.phnumber),
      //   bookingDate: new FormControl(this.post.bookingDate),
      //   bookingTime: new FormControl(this.post.bookingTime),
      //   numberofguests: new FormControl(),
      //   checkindate: new FormControl(),
      //   checkoutdate: new FormControl(),
      //   address: new FormControl()});
  



      
    });

    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phnumber: new FormControl(),
      bookingDate: new FormControl(),
      bookingTime: new FormControl(),
      comingTime: new FormControl(),
      guest: new FormControl(),
      

  })
   
}







submit(){

  this.bookpostService.update(this.id, this.form.value).subscribe((res:any) => {
    this.router.navigateByUrl('post/index');
})
}

}



