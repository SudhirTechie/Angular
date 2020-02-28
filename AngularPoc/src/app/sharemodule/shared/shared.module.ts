import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ListUserComponent } from '../../list-user/list-user.component';



@NgModule({
  declarations: [SharedComponent,ListUserComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
