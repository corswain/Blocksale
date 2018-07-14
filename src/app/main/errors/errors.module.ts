import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error401Module } from './401/error-401.module';
import { Error404Module } from './404/error-404.module';
import { Error500Module } from './500/error-500.module';

const routes: Routes = [
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        Error401Module,
        Error404Module,
        Error500Module
    ]
})
export class ErrorsModule {}
