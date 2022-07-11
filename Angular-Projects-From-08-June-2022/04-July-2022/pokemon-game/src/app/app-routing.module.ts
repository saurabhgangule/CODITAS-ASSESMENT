import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardForLazyLoadGuard } from './guards/auth-guard-for-lazy-load.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
    canLoad: [AuthGuardForLazyLoadGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
