import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConserviceService } from './conservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  

  // implements OnInit

  // list: Post[] = [];

  // form!: FormGroup;

  // constructor(
  //   public postService: ConserviceService,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {

  //   this.form = new FormGroup({
  //     id: new FormControl(),
  //     name: new FormControl(),
  //     email: new FormControl(),
  //     phnumber: new FormControl(),
  //     bookingDate: new FormControl(),
  //     bookingTime: new FormControl(),
  //     comingTime: new FormControl(),
  //     guest: new FormControl(),

  //   })

  // }


  // submit() {
    // this.router.navigateByUrl('/view/'+this.form2.value.username)

    //    if(this.form.value.id===null){
    //      this.form.value.id = Date.now() / 1000;

    //    }else{
    //      this.list = this.list.filter(singleListTask=>singleListTask.username!==this.form.value.id); 
    //    }
    //  console.log(this.form.value);
    //  this.list.push(this.form.value)
    //  this.ngOnInit();
    // console.log('Data', this.form.value);
    // this.postService.create(this.form.value).subscribe(()=>{alert("submit success")})


    // this.postService.create(this.form.value).subscribe(res => {
    //   console.log('Post created successfully', this.form.value);
    // })
  // }



  form!: FormGroup;
  name: any;
    

  constructor(
    public bookpostService: ConserviceService,
    private router: Router
  ) { }
    
 
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phnumber: new FormControl(),
      bookingDate: new FormControl(),
      bookingTime: new FormControl(),
      comingTime: new FormControl(),
      guest: new FormControl(),
      
           
    });
  }
    


  submit(){console.log(this.form.value);
  
    this.bookpostService.create(this.form.value).subscribe(() => {      
         
        alert("your booking is successfully ok")
         console.log('Post created successfully', this.form.value); 
         this.router.navigateByUrl('index'); 
         
         this.ngOnInit();  
         
    })
  }


}
