import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  loginControl(): void {
    if(true){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Giriş yapıldı!',
        background: '#222',
        color: '#fff',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('main');
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        background: '#222',
        color: '#fff',
        text: 'Kullanıcı adı veya şifre yanlış!',
      })
    }
  }
}
