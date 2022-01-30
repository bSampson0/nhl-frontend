import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GretzkyComponent } from './gretzky.component';

describe('GretzkyComponent', () => {
  let component: GretzkyComponent;
  let fixture: ComponentFixture<GretzkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GretzkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GretzkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
