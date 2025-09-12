import { QuestionsEffects } from './core/store/questions/question.effects';
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
import { ModalReducer } from './core/store/exam/exam-modal.reducers';
import { ModalEffects } from './core/store/exam/exam-modal-effects';
import { QuestionReducer } from './core/store/questions/question.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({
      subjects: SubjectsReducer,
      modal: ModalReducer,
      question: QuestionReducer
    }),
    
    provideEffects([SubjectEffects, QuestionsEffects, ModalEffects]),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
    { provide: Base_Url, useValue: 'https://exam.elevateegy.com/api/v1/' }
  ]
};
