import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './navbar/register/register.component';
import { HomeComponent } from './pages/home/home/home.component';


const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
