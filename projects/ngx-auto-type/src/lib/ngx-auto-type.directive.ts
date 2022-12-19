import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ngxAutoType]'
})
export class NgxAutoTypeDirective implements OnInit {
  private element: HTMLElement | undefined;
  private originalText: string | undefined;
  private typingDelay: number = 50;

  public constructor(private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    this.type();
  }

  public type(): void {
    this.initialize();
    this.startTyping();
  }

  private initialize(): void {
    this.element = this.elementRef.nativeElement;

    if (!this.element) {
      return;
    }

    this.originalText = this.element.innerText;
    this.element.innerText = '';
  }

  private startTyping(): void {
    if (!this.originalText || !this.element) {
      return;
    }

    const textLength: number = this.originalText.length;
    let currentText: string = '';
    let currentIndex: number = 0;

    const interval: NodeJS.Timer = setInterval(() => {
      currentText += this.originalText?.[currentIndex];

      if (!this.element) {
        return;
      }
      this.element.innerText = currentText;

      currentIndex++;
      if (currentIndex === textLength) {
        clearInterval(interval);
      }
    }, this.typingDelay);
  }
}
