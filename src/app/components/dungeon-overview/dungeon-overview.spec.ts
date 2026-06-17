import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonOverview } from './dungeon-overview';

describe('DungeonOverview', () => {
  let component: DungeonOverview;
  let fixture: ComponentFixture<DungeonOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(DungeonOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
