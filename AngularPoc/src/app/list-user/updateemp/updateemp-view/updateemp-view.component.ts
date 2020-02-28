import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateemp-view',
  templateUrl: './updateemp-view.component.html',
  styleUrls: ['./updateemp-view.component.scss']
})
export class UpdateempViewComponent implements OnInit {
  @Input() employeeData;
  @Output() valueChange = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.valueChange.emit(this.employeeData);
  }

  goBack(){
    this.router.navigate(['/list-user']);
  }


}
