import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'billet',
    loadChildren: () => import('billet/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'onboarding',
    loadChildren: () => import('onboarding/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
