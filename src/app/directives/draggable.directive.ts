import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private startPosition = { x: 0, y: 0 };
  private isDragging = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startPosition = { x: event.clientX, y: event.clientY };
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const dx = event.clientX - this.startPosition.x;
    const dy = event.clientY - this.startPosition.y;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const newTop = rect.top + dy;
    const newLeft = rect.left + dx;

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${newLeft}px, ${newTop}px)`);

    this.startPosition = { x: event.clientX, y: event.clientY };
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
  }
}
