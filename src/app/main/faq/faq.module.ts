import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { FaqComponent } from './faq.component';
import { FaqService } from './faq.service';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
    resolve: {
      faq: FaqService
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

    MatExpansionModule,
    MatIconModule,

    FuseSharedModule
  ],
  declarations: [FaqComponent],
  providers: [FaqService]
})
export class FaqModule {}
