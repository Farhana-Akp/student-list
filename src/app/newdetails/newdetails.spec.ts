import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newdetails } from './newdetails';

describe('Newdetails', () => {
  let component: Newdetails;
  let fixture: ComponentFixture<Newdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Newdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
