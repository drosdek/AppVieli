import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaoComponent } from './telao.component';

describe('TelaoComponent', () => {
  let component: TelaoComponent;
  let fixture: ComponentFixture<TelaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
