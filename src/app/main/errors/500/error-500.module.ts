import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { Error500Component } from './error-500.component';

const routes: Routes = [
    {
        path: '500',
        component: Error500Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), FuseSharedModule],
    declarations: [Error500Component]
})
export class Error500Module {}
