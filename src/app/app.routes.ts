import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { authGuard } from './core/guards/auth.guard';
import { SubjectListComponent } from './features/home/components/subject-list/subject-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./core/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent, title: 'Home' },
      {
        path: 'SubjectList/:_id',
        component: SubjectListComponent,
        title: 'Subject List'
      },
    ],
  },
];
