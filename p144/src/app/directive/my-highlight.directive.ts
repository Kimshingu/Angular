import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // nativeElement에서 'focus' 이벤트가 발생할 때
  // onFocus() 기동시킨다.
  @HostListener('focus')
  onFocus() {
    // style="background: yellow"
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'yellow');
  }
  @HostListener('blur')
  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'black');
  }

}
