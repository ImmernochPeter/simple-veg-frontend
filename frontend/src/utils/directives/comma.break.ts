import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[commaBreak]',
  standalone: true,
})
export class CommaBreakDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    const text = element.textContent || '';
    element.innerHTML = text
      .split(',')
      .map((part) => part.trim())
      .join('<br>');
  }
}
