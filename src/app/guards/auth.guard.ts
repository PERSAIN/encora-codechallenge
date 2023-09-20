import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const token = localStorage.getItem('token');
  
  if(!token){
    router.navigate(['login'])
  }
  return true;
};
