import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CookiesService } from 'src/app/modules/core/services/cookies.service';
import { LocalStorageService } from 'src/app/modules/core/services/local-storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private cookiesService: CookiesService,
    private modal: NzModalService
  ) { }

  get password(): AbstractControl {
    return this.validateForm.get('password') as AbstractControl;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.auth.login(this.validateForm.get('userName')?.value, this.validateForm.get('password')?.value)
      .subscribe(
        (token) => {
          if (token) {
            this.localStorageService.setTokenToStarage(token);
            this.cookiesService.setCookies();
            this.router.navigate(['home']);
          }
        },
        (error) => {
          this.openAndCloseAll();
          this.validateForm.reset();

        }
      )
  }

  openAndCloseAll(): void {
    let pos = 2;

    this.modal['error']({
      nzMask: false,
      nzTitle: `401 Unauthorized`,
      nzContent: `<b>Sorry, wrong login or password.</b>`,
      nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${pos++ * 300}px` }
    })
    this.modal.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

    setTimeout(() => this.modal.closeAll(), 2000);
  }
}
