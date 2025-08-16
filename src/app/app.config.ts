import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Base_Url } from 'auth';
import { headersInterceptor } from './core/interceptors/headers.interceptor.service';
import { SubjectsReducer } from './features/home/store/subjects.reducer';
import { provideEffects } from '@ngrx/effects';
import { SubjectEffects } from './features/home/store/subjects.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({
      subjects: SubjectsReducer
    }),
    provideEffects([SubjectEffects]),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
    { provide: Base_Url, useValue: 'https://exam.elevateegy.com/api/v1/' }
  ]
};
