import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'user',
    loadChildren: (): Promise<any> =>
      import('./modules/user/user.module').then(
        (module) => module.UserModule
      ),
  },
  {
    path: 'client',
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
