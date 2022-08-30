import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(yourMessage: string) {
    alertify.success(yourMessage);
  }
  warning(yourMessage: string) {
    alertify.warning(yourMessage);
  }
  error(yourMessage: string) {
    alertify.error(yourMessage);
  }
}
