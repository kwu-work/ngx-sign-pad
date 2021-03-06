import { Component, ViewChild } from '@angular/core';
import { EImageType, SignPadComponent } from 'ngx-sign-pad';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageTypes = EImageType;
  signature = null;
  signaturePNG = null;
  @ViewChild('signPad', { static: true }) signaturePad: SignPadComponent;

  constructor() {}

  clear() {
    this.signaturePad.clear();
  }

  onEnd(data) {
    console.log('data.length', data.length);
  }
}
