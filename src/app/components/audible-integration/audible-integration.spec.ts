import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudibleIntegration } from './audible-integration';

describe('AudibleIntegration', () => {
  let component: AudibleIntegration;
  let fixture: ComponentFixture<AudibleIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudibleIntegration],
    }).compileComponents();

    fixture = TestBed.createComponent(AudibleIntegration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
