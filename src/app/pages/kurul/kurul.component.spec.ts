import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurulComponent } from './kurul.component';

describe('KurulComponent', () => {
  let component: KurulComponent;
  let fixture: ComponentFixture<KurulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurulComponent]
    });
    fixture = TestBed.createComponent(KurulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
