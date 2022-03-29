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
import { ProtocolForUserComponent } from './pages/protocol-for-user/protocol-for-user.component';
import { PatientIdentificationComponent } from './pages/newProtocol/patient-identification/patient-identification.component';
import { CurrentNeurologicalSymptomsComponent } from './pages/newProtocol/current-neurological-symptoms/current-neurological-symptoms.component';
import { AuditiveComprehensionComponent } from './pages/newProtocol/auditive-comprehension/auditive-comprehension.component';
import { OralExpressionComponent } from './pages/newProtocol/oral-expression/oral-expression.component';
import { RepetitionComponent } from './pages/newProtocol/repetition/repetition.component';
import { DenominationComponent } from './pages/newProtocol/denomination/denomination.component';
import { ReadingComponent } from './pages/newProtocol/reading/reading.component';
import { WritingComponent } from './pages/newProtocol/writing/writing.component';
import { TestSummaryComponent } from './pages/newProtocol/test-summary/test-summary.component';
import { ViewProtocolComponent } from './pages/ViewProtocol/view-protocol/view-protocol.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { WithoutAccessComponent } from './pages/WithoutAccess/without-access/without-access.component';
import { HttpClientModule } from '@angular/common/http'
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
    ProtocolForUserComponent,
    PatientIdentificationComponent,
    CurrentNeurologicalSymptomsComponent,
    AuditiveComprehensionComponent,
    OralExpressionComponent,
    RepetitionComponent,
    DenominationComponent,
    ReadingComponent,
    WritingComponent,
    TestSummaryComponent,
    ViewProtocolComponent,
    WithoutAccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
