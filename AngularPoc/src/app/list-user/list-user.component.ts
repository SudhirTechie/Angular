import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '.././registration/registration.service';
import { SharedService } from '../sharemodule/shared.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {  SnackBarComponent } from "../sharemodule/shared/snackbar/snackbar.component";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  providers: [RegistrationService]
})
export class ListUserComponent implements OnInit {
  //@Input() data;
  employeeList: any;
  employeeData = "";
  showFlag = false;

  constructor(private registrationService: RegistrationService,
    private sharedService: SharedService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getEmployeeList();
    this.employeeList = this.sharedService.getDisplayData();
    console.log(this.employeeList);
  }

  getEmployeeList() {
    this.registrationService.getEmployee().subscribe((data: any) => {
      if (data) {
        this.employeeList = data;
        console.log(this.employeeList);
      }
    }
    )
  }
  // detailsEmployee(id: number){
  //   this.registrationService.getEmployeeById(id).subscribe((res =>{
  //     this.employeeData = res;
  //     if(this.employeeData){
  //       this.showFlag = true;
  //     }
  //     //this.router.navigateByUrl('/details');
  //      // this.router.navigate(['details', id]);

      
  //   }))

  // }

  detailsEmployee(id: number){
        this.router.navigate(['details', id]);
      
    }

    updateEmployee(id:number){
      this.router.navigate(['update',id]);
    }
  


  deleteEmployee(id: number){
    this.registrationService.deleteEmployee(id).subscribe(res=>{
      this.getEmployeeList();
    },
    error => console.log(error));
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data:'Hi Sudhir,Update is successful'
    });
  }

  showToaster(status){
    if(status === 'success'){
      this.openSnackBar();
    }
  }
}
