import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { Error401Component } from './error-401.component';

const routes: Routes = [
  {
    path: '401',
    component: Error401Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatIconModule, FuseSharedModule],
  declarations: [Error401Component]
})
export class Error401Module { }
