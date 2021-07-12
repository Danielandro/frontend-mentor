import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipTotalComponent } from './tip-total.component';

describe('TipTotalComponent', () => {
  let component: TipTotalComponent;
  let fixture: ComponentFixture<TipTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
