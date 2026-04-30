import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodPage } from './pod-page';

describe('PodPage', () => {
  let component: PodPage;
  let fixture: ComponentFixture<PodPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
