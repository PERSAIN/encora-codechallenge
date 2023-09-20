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
    if (this.loginForm.value.username !== 'juan') alert('Wrong username');
    if (this.loginForm.value.password !== 'encora') alert('Wrong password');

    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['/']);
  }
}
