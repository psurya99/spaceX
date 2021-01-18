import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketListComponent } from './rocket-list.component';

describe('RocketListComponent', () => {
  let component: RocketListComponent;
  let fixture: ComponentFixture<RocketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
