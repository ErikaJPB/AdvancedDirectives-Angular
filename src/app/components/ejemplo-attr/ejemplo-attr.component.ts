import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-attr',
  templateUrl: './ejemplo-attr.component.html',
  styleUrls: ['./ejemplo-attr.component.scss'],
})
export class EjemploAttrComponent {
  // color para subrayar los textos
  color: string = '';
}
