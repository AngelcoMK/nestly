import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayDetail } from './stay-detail';

describe('StayDetail', () => {
  let component: StayDetail;
  let fixture: ComponentFixture<StayDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(StayDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
