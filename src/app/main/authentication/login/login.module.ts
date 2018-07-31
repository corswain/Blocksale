import { SharedModule } from 'shared/shared.module';

import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    SharedModule,
    FuseSharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
