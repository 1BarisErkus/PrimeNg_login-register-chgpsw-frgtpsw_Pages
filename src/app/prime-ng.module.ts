import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const PrimeModules = [
  CheckboxModule,
  InputTextModule,
  PasswordModule,
  ButtonModule,
  CardModule,
  DividerModule,
  SliderModule,
  MessagesModule,
  MessageModule
]

@NgModule({
  imports: [PrimeModules],
  exports: [PrimeModules]
})
export class PrimeNgModule { }
