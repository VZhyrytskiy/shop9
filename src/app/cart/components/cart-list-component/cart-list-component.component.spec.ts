import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListComponentComponent } from './cart-list-component.component';

describe('CartListComponentComponent', () => {
  let component: CartListComponentComponent;
  let fixture: ComponentFixture<CartListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListComponentComponent]
    });
    fixture = TestBed.createComponent(CartListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
