import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { MenuComponent } from './navbar/menu/menu.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './navbar/logout/logout.component';
import { MyPatientsComponent } from './pages/myPatients/my-patients/my-patients.component';
import { RegisterNewPatientsComponent } from './pages/registerNewPatients/register-new-patients/register-new-patients.component';
import { NewProtocolComponent } from './pages/newProtocol/new-protocol/new-protocol.component';
import { HistoricalComponent } from './pages/historical/historical/historical.component';
import { ProtocolForUserComponent } from './pages/protocol-for-user/protocol-for-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    LogoutComponent,
    MyPatientsComponent,
    RegisterNewPatientsComponent,
    NewProtocolComponent,
    HistoricalComponent,
    ProtocolForUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
