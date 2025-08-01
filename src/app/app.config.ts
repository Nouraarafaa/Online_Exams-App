import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Base_Url } from 'auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideClientHydration(withEventReplay()),
  provideStore(),
  {
    provide: Base_Url,
    useValue: 'https://exam.elevateegy.com/api/v1/'
  },
  provideHttpClient(withFetch()),
]
};
