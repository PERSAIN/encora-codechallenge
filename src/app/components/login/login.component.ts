import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  private router: Router = inject(Router);

  login(){
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['home'])
  }
}
