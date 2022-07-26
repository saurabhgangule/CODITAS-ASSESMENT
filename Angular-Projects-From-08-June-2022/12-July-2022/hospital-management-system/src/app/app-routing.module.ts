import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule),
    canLoad: [AuthGuard],
    data: {
      role: environment.admin._id
    }
  },
  {
    path: 'doctor',
    loadChildren: () => import('./modules/doctor/doctor.module').then(module => module.DoctorModule),
    canLoad: [AuthGuard],
    data: {
      role: environment.doctor._id
    }
  },
  {
    path: 'nurse',
    loadChildren: () => import('./modules/nurse/nurse.module').then(module => module.NurseModule),
    canLoad: [AuthGuard],
    data: {
      role: environment.nurse._id
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
