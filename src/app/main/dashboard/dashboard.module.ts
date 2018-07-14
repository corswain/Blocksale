import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
    MatSelectModule, MatTabsModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './dashboard.component';
import { highchartsModules } from './highcharts.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: '/errors/404'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,

        TranslateModule,
        ChartsModule,
        ChartModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseWidgetModule
    ],
    providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
