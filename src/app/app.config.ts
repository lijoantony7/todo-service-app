import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, } from '@angular/router';
import { routes } from './app.routers';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes)],
};
