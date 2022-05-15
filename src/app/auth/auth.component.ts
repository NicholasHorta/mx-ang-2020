import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthResponseData> = new Observable<AuthResponseData>();

    if (!form.valid) {
      return;
    };
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    }, errorMsg => {
      this.error = errorMsg;
      this.isLoading = false;
    });
    form.reset();
  }

}
