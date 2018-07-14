import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { Error404Component } from './error-404.component';

const routes: Routes = [
  {
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatIconModule, FuseSharedModule],
  declarations: [Error404Component]
})
export class Error404Module {}
