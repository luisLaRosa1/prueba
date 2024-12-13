import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './main/layouts/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlankLayoutComponent,
        loadChildren: () => import('./main/pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
