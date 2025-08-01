import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthLayoutComponent, children: [
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
  ]}
];
