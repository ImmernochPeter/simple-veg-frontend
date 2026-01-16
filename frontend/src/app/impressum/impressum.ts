import { Component } from '@angular/core';
import { CommaBreakDirective } from '../../utils/directives/comma.break';

@Component({
  selector: 'app-impressum',
  imports: [CommaBreakDirective],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {
  constructor() {
  }
  name = "Peter Koban";
  address = "Sebnitzer Straße 49, 01099 Dresden, Deutschland";
  email = "peter.koban@pm.me";
}
