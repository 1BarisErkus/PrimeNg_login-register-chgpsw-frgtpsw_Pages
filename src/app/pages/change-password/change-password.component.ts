import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePassword(): void {
    if (true) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Şifre başarıyla değiştirildi!',
        background: '#222',
        color: '#fff',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        background: '#222',
        color: '#fff',
        text: 'Bir hata oluştu!',
      })
    }
  }
}
