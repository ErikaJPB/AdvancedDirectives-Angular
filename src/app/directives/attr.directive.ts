import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AttrDirective {
  @Input() defaultColor = '';
  @Input('appHighlight') highlightColor = '';

  constructor(private _elementRef: ElementRef) {}

  // Comportamiento para Mouse Enter en el componente
  @HostListener('mouseenter') onMouseEnter() {
    // Ponemos el color de fondo
    this._cambiarColor(this.highlightColor || this.defaultColor || 'tomato');
  }

  // Comportamiento para Mouse Leave en el componente
  @HostListener('mouseleave') onMouseLeave() {
    // Quitamos el color de fondo
    this._cambiarColor(null);
  }

  /**
   * Metodo encargado de cambiar el color de fondo de un componente.
   * @param color Color de fondo del componente.
   */
  private _cambiarColor(color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
