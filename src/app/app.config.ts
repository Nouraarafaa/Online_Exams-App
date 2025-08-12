import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Base_Url } from 'auth';
import { headersInterceptor } from './core/interceptors/headers.interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideClientHydration(withEventReplay()),
  provideStore(),
  {
    provide: Base_Url,
    useValue: 'https://exam.elevateegy.com/api/v1/'
  },
  provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
]
};
