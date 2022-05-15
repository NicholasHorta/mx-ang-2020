import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) { }

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
    if (!form.valid) {
      return;
    };
    if (this.isLoginMode) {
      //..
    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, errorMsg => {
        this.error = errorMsg;
        this.isLoading = false;
      });
    }
    form.reset();
  }

}
