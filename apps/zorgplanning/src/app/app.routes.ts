import { Route } from '@angular/router';
import { FeatureDashboard } from '@zorgplanning/feature-dashboard';
import { FeatureClientDetail } from 'libs/clients/feature-client-detail/src';
import { FeatureClientOverview } from 'libs/clients/feature-client-overview/src';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@zorgplanning/feature-shell').then((m) => m.FeatureShell),
    children: [
      {
        path: 'dashboard',
        component: FeatureDashboard,
      },
      {
        path: 'clients',
        children: [
          {
            path: '',
            component: FeatureClientOverview,
          },
          {
            path: ':id',
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
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
