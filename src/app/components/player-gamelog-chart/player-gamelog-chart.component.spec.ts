import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGamelogChartComponent } from './player-gamelog-chart.component';

describe('PlayerGamelogChartComponent', () => {
  let component: PlayerGamelogChartComponent;
  let fixture: ComponentFixture<PlayerGamelogChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGamelogChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGamelogChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
