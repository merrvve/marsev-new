import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapComponent } from './kitap.component';

describe('KitapComponent', () => {
  let component: KitapComponent;
  let fixture: ComponentFixture<KitapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitapComponent]
    });
    fixture = TestBed.createComponent(KitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
