import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagisComponent } from './bagis.component';

describe('BagisComponent', () => {
  let component: BagisComponent;
  let fixture: ComponentFixture<BagisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagisComponent]
    });
    fixture = TestBed.createComponent(BagisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
