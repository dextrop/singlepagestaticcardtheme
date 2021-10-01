import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgallerysampleComponent } from './productgallerysample.component';

describe('ProductgallerysampleComponent', () => {
  let component: ProductgallerysampleComponent;
  let fixture: ComponentFixture<ProductgallerysampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductgallerysampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgallerysampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
