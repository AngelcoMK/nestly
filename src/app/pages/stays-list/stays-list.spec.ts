import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysList } from './stays-list';

describe('StaysList', () => {
  let component: StaysList;
  let fixture: ComponentFixture<StaysList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysList],
    }).compileComponents();

    fixture = TestBed.createComponent(StaysList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
