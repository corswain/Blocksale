import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/errors/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), LoginModule, RegisterModule]
})
export class AuthenticationModule {}
