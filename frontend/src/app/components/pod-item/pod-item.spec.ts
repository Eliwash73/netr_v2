import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodItem } from './pod-item';

describe('PodItem', () => {
  let component: PodItem;
  let fixture: ComponentFixture<PodItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
