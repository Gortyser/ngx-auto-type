import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutoTypeComponent } from './ngx-auto-type.component';

describe('NgxAutoTypeComponent', () => {
  let component: NgxAutoTypeComponent;
  let fixture: ComponentFixture<NgxAutoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAutoTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAutoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
