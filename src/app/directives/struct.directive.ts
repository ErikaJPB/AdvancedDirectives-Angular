import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rolCorrecto]',
})
export class StructDirective {
  private _mostrando: boolean = false;

  @Input() set rolCorrecto(condicion: boolean) {
    if (condicion && !this._mostrando) {
      // Creamos el elemento
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      this._mostrando = true;
    } else {
      // Eliminamos el elemento
      this._viewContainerRef.clear();
      this._mostrando = false;
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}
}
