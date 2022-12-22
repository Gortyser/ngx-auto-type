import { ElementRef } from '@angular/core';
import { NgxAutoTypeDirective } from './ngx-auto-type.directive';
import { TestBed } from '@angular/core/testing';

export class MockElementRef extends ElementRef {
  constructor() { super(null); }
}

describe('NgxAutoTypeDirective', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  }));

  it('should create an instance', () => {
    const directive = new NgxAutoTypeDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
