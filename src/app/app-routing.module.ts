import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './navbar/register/register.component';
import { HistoricalComponent } from './pages/historical/historical/historical.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MyPatientsComponent } from './pages/myPatients/my-patients/my-patients.component';
import { NewProtocolComponent } from './pages/newProtocol/new-protocol/new-protocol.component';
import { ProtocolForUserComponent } from './pages/protocol-for-user/protocol-for-user.component';
import { RegisterNewPatientsComponent } from './pages/registerNewPatients/register-new-patients/register-new-patients.component';
import { ViewProtocolComponent } from './pages/ViewProtocol/view-protocol/view-protocol.component';


const routes: Routes = [
  {path: 'myPatients', component:MyPatientsComponent},
  {path: 'registerNewPatient', component:RegisterNewPatientsComponent},
  {path: 'newProtocol', component:NewProtocolComponent},
  {path: 'allProtocolsByPatient', component:ProtocolForUserComponent},
  {path: 'viewProtocol', component:ViewProtocolComponent},
  {path: 'home', component:HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
