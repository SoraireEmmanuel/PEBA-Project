import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MyPatientsComponent } from './pages/myPatients/my-patients/my-patients.component';
import { NewProtocolComponent } from './pages/newProtocol/new-protocol/new-protocol.component';
import { ProtocolForUserComponent } from './pages/protocol-for-user/protocol-for-user.component';
import { RegisterNewPatientsComponent } from './pages/registerNewPatients/register-new-patients/register-new-patients.component';
import { ViewProtocolComponent } from './pages/ViewProtocol/view-protocol/view-protocol.component';
import { WithoutAccessComponent } from './pages/WithoutAccess/without-access/without-access.component';
import { AuthGuard } from './guard/auth.guard';
import { CanDeactivateNewProtocolGuard } from './guard/can-deactivate-new-protocol.guard';

const routes: Routes = [
  {path: 'myPatients', component:MyPatientsComponent, canActivate: [AuthGuard]},
  {path: 'registerNewPatient', component:RegisterNewPatientsComponent, canActivate: [AuthGuard]},
  {path: 'newProtocol', component:NewProtocolComponent, canDeactivate: [CanDeactivateNewProtocolGuard],canActivate: [AuthGuard]},
  {path: 'allProtocolsByPatient', component:ProtocolForUserComponent, canActivate: [AuthGuard]},
  {path: 'viewProtocol', component:ViewProtocolComponent, canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent },
  {path: 'withoutAccess', component:WithoutAccessComponent },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
