import { provideRouter, RouterConfig } from '@angular/router-deprecated';

export const routes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'location', component: LocationComponent },
  { path: 'guides', component: GuideComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
