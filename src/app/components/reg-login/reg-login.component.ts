import { Component, OnInit } from '@angular/core';
import { NgModel, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '@models/database';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.scss'],
})
export class RegLoginComponent implements OnInit {
  formRegistro = this.formBuilder.group({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'blur',
    }),
    correo: new FormControl('', { validators: [Validators.required] }),
    pass: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'blur',
    }),
    pass2: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'blur',
    }),
  });

  formLogin = this.formBuilder.group({
    username: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    pass: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'blur',
    }),
  });
  registro: boolean = false;
  regErrMsg: any = '';

  // Instanciamos formBuilder, que contendrá los datos de los inputs
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  get getReg() {
    return this.formRegistro.controls;
  }

  registrarse(): void {
    // const formData = new FormData();
    // formData.append('');
    const endPoint = endpoint;
    this.http
      .post<any>(endPoint + '/usuario', this.formRegistro.value)
      .subscribe({
        next: (msg) => {
          this.regErrMsg = msg.error.text;
        },
        error: (msg) => {
          this.regErrMsg = msg.error.text;
        },
      });
  }
  login(): void {}
}
