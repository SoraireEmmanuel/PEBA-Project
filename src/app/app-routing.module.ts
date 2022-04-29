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
import { AccountManagementComponent } from './pages/AccountManagement/account-management/account-management.component';
import { AccountActivationComponent } from './pages/AccountManagement/account-activation/account-activation.component';
import { RecoverPasswordComponent } from './pages/AccountManagement/recover-password/recover-password.component';
import { PasswordUpdateComponent } from './pages/AccountManagement/password-update/password-update.component';

const routes: Routes = [
  {path: 'myPatients', component:MyPatientsComponent, canActivate: [AuthGuard]},
  {path: 'registerNewPatient', component:RegisterNewPatientsComponent, canActivate: [AuthGuard]},
  {path: 'newProtocol', component:NewProtocolComponent},//, canDeactivate: [CanDeactivateNewProtocolGuard], canActivate: [AuthGuard]    /:Bilingual/:BilingualIdioma/:Cod_Paciente/:Dominancia/:Estudios/:FechaNacimiento/:Id_Paciente/:Iniciales/:Lengua
  {path: 'allProtocolsByPatient/:PatientId', component:ProtocolForUserComponent, canActivate: [AuthGuard]},
  {path: 'viewProtocol/:Id_Protocolo/:Id_Paciente', component:ViewProtocolComponent, canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent },
  {path: 'withoutAccess', component:WithoutAccessComponent },
  {path: 'accountActivation/:code/:mail', component:AccountActivationComponent},
  {path: 'passwordRecover/:code/:mail', component:RecoverPasswordComponent},
  {path: 'passwordUpdate', component:PasswordUpdateComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
