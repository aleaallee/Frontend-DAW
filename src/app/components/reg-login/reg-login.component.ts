import { Component, OnInit } from '@angular/core';
import { NgModel, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '@models/database';
import { Router } from '@angular/router';
import { forbiddenNameValidator } from '../../validators/forbidden-name-validator';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.scss'],
})
export class RegLoginComponent implements OnInit {
  formRegistro = this.formBuilder.group({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/administreitor/i),
      ],
      updateOn: 'change',
    }),
    correo: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    pass: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'change',
    }),
    pass2: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'change',
    }),
  });

  formLogin = this.formBuilder.group({
    username: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'change',
    }),
  });
  registro: boolean = false;
  regErrMsg: any = '';
  loginErrMsg: any = '';

  // Instanciamos formBuilder, que contendrá los datos de los inputs
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      // console.log('Ya se ha iniciado sesión');
      this.route.navigate(['']);
    }
  }

  get getReg() {
    return this.formRegistro.controls;
  }
  get getLogin() {
    return this.formLogin.controls;
  }

  registrarse(): void {
    // const formData = new FormData();
    // formData.append('');
    const endPoint = endpoint;
    this.http
      .post<any>(endPoint + '/usuario', this.formRegistro.value)
      .subscribe({
        next: (msg) => {
          this.regErrMsg = msg.error.text || msg.error;
        },
        error: (msg) => {
          this.regErrMsg = msg.error.text || msg.error;
          console.log(msg);

          if (msg.status == 201) {
            this.route.navigate(['']);
          }
        },
      });
  }
  login(): void {
    const endPoint = endpoint;
    this.http
      .post<any>(endPoint + '/usuario/login', this.formLogin.value)
      .subscribe({
        next: (msg) => {
          this.loginErrMsg = msg.error.text || msg.error;
        },
        error: (msg) => {
          this.loginErrMsg = msg.error.text || msg.error;
          // console.log(msg);

          if (msg.status == 201) {
            // const user = this.formLogin.get('username')?.value;
            // const usr = this.usersService.getUsuario(user);
            const user = this.formLogin.get('username')?.value;
            this.usersService.getUsuario(user).subscribe((user) => {
              // Guardar datos del usuario en el localStorage para hacer que inicie sesión
              localStorage.setItem('loggedUser', user.username);
              localStorage.setItem('role', user.rol == 1 ? 'usuario' : 'admin');
              console.log(user);
            });

            //   this.route.navigate(['']);
          }
        },
      });
  }
}
