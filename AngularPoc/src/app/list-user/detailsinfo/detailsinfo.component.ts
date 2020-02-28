import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RegistrationService } from '../../registration/registration.service';

@Component({
  selector: 'app-detailsinfo',
  templateUrl: './detailsinfo.component.html',
  styleUrls: ['./detailsinfo.component.scss'],
  providers:[RegistrationService]
})
export class DetailsinfoComponent implements OnInit {
  @Input() employeeDetails;
  id: number;
  constructor(private route: ActivatedRoute,private router: Router,private registrationService: RegistrationService) { }

  ngOnInit() {
     console.log(this.employeeDetails);
    this.id = this.route.snapshot.params['id'];
    this.registrationService.getEmployeeById(this.id).subscribe(data => {
      console.log(data)
      this.employeeDetails = data;
    }, error => console.log(error));
  }

  back(){
    this.router.navigateByUrl('/list-user');
  }

}
