import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      '2px solid #ff385c'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'box-shadow',
      '0 8px 20px rgba(0, 0, 0, 0.2)'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(
      this.element.nativeElement,
      'border'
    );

    this.renderer.removeStyle(
      this.element.nativeElement,
      'box-shadow'
    );
  }
}