import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService,public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }
  public errorMessages = {
    username: [
      { type: 'required', message: 'Usuario es requerido.' },
    ],
    password: [
      { type: 'required', message: 'Contraseña es requerida.' },
      { type: 'minlength', message: 'Contraseña debe tener al menos ' +6+ ' caracteres.'}
    ]
  }
  errors = []
  
  
 
   submit() {
    this.authService.login(this.username.value,this.password.value);
  }
}
