import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private router: Router = inject(Router);

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    errorMessage: new FormControl<string | null>(''),
  });

  public login(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    let errorOccurred = false;
  
    if (username !== 'juan') {
      alert('Wrong username');
      errorOccurred = true;
    }
  
    if (password !== 'encora') {
      alert('Wrong password');
      errorOccurred = true;
    }
  
    if (!errorOccurred) {
      const token = Math.random().toString();
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    }
  }
  
  
}
