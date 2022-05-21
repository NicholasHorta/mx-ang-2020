import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component'
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private compFactResolver: ComponentFactoryResolver) { }

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective; 

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit()');
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
      console.log('authObservable.subscribe');
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    }, errorMsg => {
      this.error = errorMsg;
      this.showErrorAlert(errorMsg);
      this.isLoading = false;
    });
    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

  private showErrorAlert(msg: string){
    const alertCmpFactory = this.compFactResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const createdComponentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    createdComponentRef.instance.message = msg;
    this.closeSub = createdComponentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

}
