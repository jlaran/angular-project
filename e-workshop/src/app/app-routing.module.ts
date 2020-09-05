import { AuthAdminGuard } from './core/guards/authAdmin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoggedGuard } from './core/guards/logged.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'user',
    canLoad: [AuthAdminGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/user/user.module').then(
        (module) => module.UserModule
      ),
  },
  {
    path: 'client',
    canLoad: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/client/client.module').then(
        (module) => module.ClientModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
