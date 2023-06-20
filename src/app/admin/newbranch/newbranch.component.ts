import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AddnewbranchService } from 'src/app/services/addnewbranch.service';
import { BangladeshServiceService } from 'src/app/services/bangladesh-service.service';
import { Upazilas } from './upazila';
import { Districts } from './districts';

@Component({
  selector: 'app-newbranch',
  templateUrl: './newbranch.component.html',
  styleUrls: ['./newbranch.component.css']
})
export class NewbranchComponent implements OnInit{


  form!:FormGroup;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private AuthService: AddnewbranchService, private bangladesh:BangladeshServiceService, private router: Router) { }

 
  listOfdistricts!: { id: number, name: string, branName:string, thName:string, emails:string, phn:string, lats:DoubleRange, lots:DoubleRange }[];



  ngOnInit(): void {
    // this.bangladesh.getDistricts().subscribe((res: any)=>{
    //   this.listOfdistricts = res;
    //       })
    this.bangladesh.getDistricts().subscribe((res: any) => {
      this.listOfdistricts = res.map((district: any) => ({ id: district.id, name: district.name }));
    });

    this.form = new FormGroup({
      id:new FormControl(),
      branchName:new FormControl(''),
      districtName:new FormControl(''),
      thanaName:new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      latitude:new FormControl(),
      longitude:new FormControl()
    })
    this.latitude1 = { min: 0, max: 0 };
    this.longitude1 = { min: 0, max: 0 };
    
  }

  // onSubmit(): void {
  //   this.authService.addBranch(this.form.value).subscribe({
  //     next: data => {
  //       this.isSuccessful = true;   
  //       this.isSignUpFailed = false;
  //      },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });

  //   this.latitude1 = { min: 0, max: 0 };
  //   this.longitude1 = { min: 0, max: 0 };
   
   
  // }
  onSubmit(): void {
    const { districtName, id, branchName, thanaName, email, phoneNumber, latitude, longitude } = this.form.value;
    const selectedDistrict = this.listOfdistricts.find((district) => district.id == districtName);
  
    if (selectedDistrict) {
      const formData = {
        id: id,
        branchName: branchName,
        thanaName: thanaName,
        email: email,
        phoneNumber: phoneNumber,
        latitude: latitude,
        longitude: longitude,
        districtName: selectedDistrict.name,
        districtId: selectedDistrict.id // Add districtId to the formData object
      };
  
      this.AuthService.addBranch(formData).subscribe({
        next: data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  

  }
  

  isUpazilas!:Upazilas[];
  latilon!:Districts[];
  lat!:DoubleRange;
  // lot!:DoubleRange;

  loop() {
    for (var product of this.latilon) {   
        this.latitude1 = product.lat;
        this.longitude1 = product.lon;    
    }
   
  }

  
 
  latitude1!: DoubleRange;
  longitude1!: DoubleRange;

  changeUpazilas(id:any){
       this.bangladesh.getUpazilas(id).subscribe((res:any)=>{
        this.isUpazilas = res;      
        }) 

        this.bangladesh.getDistrict(id).subscribe((res:any)=>{
        this.latilon = res;  
        this.loop();
         
        })
    

  }



  popupClose(){
    this.isSuccessful = false;
    this.ngOnInit();
    this.router.navigateByUrl('admins/branch/newBranchadd');    

  }



}
