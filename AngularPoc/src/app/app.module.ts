import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {
  MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatNativeDateModule, MatIconModule,
  MatCheckboxModule, MatFormFieldModule, MatRadioModule, MatListModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './registration/menu/menu.component';
import { FooterComponent } from './registration/footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedService } from './sharemodule/shared.service';
import { DetailsinfoComponent } from './list-user/detailsinfo/detailsinfo.component';
import { UpdateempComponent } from './list-user/updateemp/updateemp.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './sharemodule/shared/snackbar/snackbar.component';
import { UpdateempViewComponent } from './list-user/updateemp/updateemp-view/updateemp-view.component';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    MenuComponent,
    FooterComponent,
    ListUserComponent,
    NavbarComponent,
    DetailsinfoComponent,
    UpdateempComponent,
    SnackBarComponent,
    UpdateempViewComponent,
    CheckComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule,
    MatCheckboxModule, MatFormFieldModule, MatRadioModule, MatListModule,
    NgbModule,
    Ng2SearchPipeModule,MatSnackBarModule
    
  ],
  entryComponents:[UpdateempComponent,SnackBarComponent],
  providers: [HttpClientModule, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
