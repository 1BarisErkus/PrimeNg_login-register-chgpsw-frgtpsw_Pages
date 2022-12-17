import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email = "";

  sendMail(): void {
    if(true){
      Swal.fire({
        icon: 'success',
        title: 'Mail gönderildi!',
        text: 'Lütfen posta kutunuzu kontrol ediniz.',
        background: '#222',
        color: '#fff',
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        background: '#222',
        color: '#fff',
        text: 'Beklenmedik bir hata oluştu!',
      })
    }
  }

}
