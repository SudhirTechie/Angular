import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../../registration/registration.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {  SnackBarComponent } from "../../sharemodule/shared/snackbar/snackbar.component";

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.scss'],
  providers:[RegistrationService]
})
export class UpdateempComponent implements OnInit {
  employeeId: number;
  employeeData: any;
 // @Output() valueChange = new EventEmitter();
  
  constructor(private router: Router, private route: ActivatedRoute, 
    private registrationService: RegistrationService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['id'];
    this.registrationService.getEmployeeById(this.employeeId).subscribe(res => {
      this.employeeData = res;
    },
      error => console.log(error));

  }
  postDataOnSubmit(employeeData){
    this.updateEmp(employeeData);
  }

  updateEmp(employeeData){
    this.registrationService.updateEmployeeDetails(this.employeeId,employeeData).subscribe((res:any) =>{
        if(res){
          this.openSnackBar();
         //this.valueChange.emit('success');
          this.goBack();
        }
    },error=>console.log(error));
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data:'You Have updated successfully'
    });
  }

  goBack(){
    this.router.navigate(['/list-user']);
  }

}
