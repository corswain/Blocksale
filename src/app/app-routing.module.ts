import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren:
      './main/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'dashboard',
    loadChildren: './main/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'faq',
    loadChildren: './main/faq/faq.module#FaqModule'
  },
  {
    path: 'api',
    loadChildren: './main/api/api.module#ApiModule'
  },
  {
    path: 'chat-support',
    loadChildren: './main/chat/chat.module#ChatModule'
  },
  {
    path: 'errors',
    loadChildren: './main/errors/errors.module#ErrorsModule'
  },
  {
    path: '**',
    redirectTo: 'errors/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
