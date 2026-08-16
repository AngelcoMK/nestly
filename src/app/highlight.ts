import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      '2px solid #ff385c'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'box-shadow',
      '0 4px 12px rgba(0, 0, 0, 0.15)'
    );
  }
}