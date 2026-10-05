import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmywork } from './viewmywork';

describe('Viewmywork', () => {
  let component: Viewmywork;
  let fixture: ComponentFixture<Viewmywork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewmywork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmywork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
