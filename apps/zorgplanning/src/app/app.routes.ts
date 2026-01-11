import { Route } from '@angular/router';
import { FeatureDashboard } from '@zorgplanning/feature-dashboard';
import { FeatureClientDetail } from '@zorgplanning/feature-client-detail';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@zorgplanning/feature-shell').then((m) => m.FeatureShell),
    children: [
      {
        path: 'overview',
        component: FeatureDashboard,
      },
      {
        path: 'client/:id',
        component: FeatureClientDetail,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
