import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dowloalresume } from './dowloalresume';

describe('Dowloalresume', () => {
  let component: Dowloalresume;
  let fixture: ComponentFixture<Dowloalresume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dowloalresume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dowloalresume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
