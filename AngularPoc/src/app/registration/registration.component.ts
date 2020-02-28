import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import{ RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { SharedService } from '../sharemodule/shared.service';
//import { Subject } from 'rxjs/Subject';
//import { Subscription } from 'rxjs/Observable';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {
  addForm : FormGroup;
  designation: 'ATL';
  employeeList: any;
  //public unSubscribe$ = new Subject();
  constructor(private registrationService: RegistrationService,private formBuilder: FormBuilder, private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      'employeeName':['',Validators.required],
      'designation':['ATL',Validators.required],
      'address':[''],
      'email':[''],
      'password':[''],
      'date':[''],
      'salary':['',Validators.required]

    })
  }
   register(){
     this.registrationService.postEmployee(this.addForm.value).subscribe((data: any) =>{
      if(data){
        this.gotoList();
      }
     })
   }
   gotoList(){
     
     this.getEmployeeList();
   }

   //getEmployeeList(){
    //this.registrationService.getEmployee()//.subscribe((data: any)=>{
    //   if(data){
    //     this.employeeList = data;
    //     //console.log(this.employeeList);
    //     this.sharedService.setDisplayData(data);
    //    // this.sharedService.setDisplayData(response);
    //    this.router.navigateByUrl('/list-user');
    //   }
    // }
    // )}
    //this.router.navigateByUrl('/list-user');
   //}

   getEmployeeList(){
    this.registrationService.getEmployee().subscribe((data: any)=>{
      if(data){
        this.employeeList = data;
        //console.log(this.employeeList);
        this.sharedService.setDisplayData(data);
       // this.sharedService.setDisplayData(response);
       this.router.navigateByUrl('/list-user');
      }
    }
    )}

    // ngOnDestory(){
    //   this.unSubscribe$.next();
    //   this.unSubscribe$.next();
    // }
    
}
