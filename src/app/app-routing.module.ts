import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{ path: '', loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule) ,canActivate: [AuthGuard] },{ path: 'home', loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule) }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
