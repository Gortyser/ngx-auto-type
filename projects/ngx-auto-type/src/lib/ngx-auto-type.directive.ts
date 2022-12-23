import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[ngxAutoType]'
})
export class NgxAutoTypeDirective implements OnInit {
  @Input('ngxAutoType')
  set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;

    if (this.isEnabled) {
      this.type();
    }
  }
  get isEnabled(): boolean | undefined {
    return this._isEnabled;
  }
  @Input() public typingDelay: number = 50;
  @Output() public natTypingEnd: EventEmitter<void> = new EventEmitter();

  private element: HTMLElement | undefined;
  private originalText: string | undefined;
  private _isEnabled: boolean | undefined = true;

  public constructor(private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    this.type();
  }

  public type(): void {
    if (!this.isEnabled) {
      return;
    }

    this.initialize();
    this.startTyping();
  }

  private initialize(): void {
    this.element = this.elementRef.nativeElement;

    if (!this.element || !this.element.innerText) {
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
        this.natTypingEnd.emit();
      }
    }, this.typingDelay);
  }
}
