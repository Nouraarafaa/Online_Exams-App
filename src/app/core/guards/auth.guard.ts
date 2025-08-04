import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router);
  const token = localStorage.getItem('token');
  
  if (token && token !== 'null' && token !== '') {
    return true;
  } 
  else {
    _router.navigate(['/auth/login']);
    return false;
  }

};
