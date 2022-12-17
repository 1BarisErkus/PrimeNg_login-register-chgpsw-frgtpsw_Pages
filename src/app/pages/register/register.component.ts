import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router){}

  email = "";

  checkValidation(): boolean {
    return true;
  }
  
  register() {
    if(this.checkValidation()){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Kayıt başarıyla oluşturuldu!',
        background: '#222',
        color: '#fff',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('login');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        background: '#222',
        color: '#fff',
        text: 'Lütfen alanları doğru bir şekilde doldurun!',
      })
    }
  };
}
