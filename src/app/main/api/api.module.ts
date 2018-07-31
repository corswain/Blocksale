import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ApiComponent } from './api.component';
import { ApiService } from './api.service';

const routes: Routes = [
  {
    path: '',
    component: ApiComponent,
    resolve: {
      academy: ApiService
    }
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
    MatIconModule,
    MatListModule,
    MatTabsModule,

    FuseSidebarModule,
    FuseSharedModule
  ],
  declarations: [ApiComponent],
  providers: [ApiService]
})
export class ApiModule {}
