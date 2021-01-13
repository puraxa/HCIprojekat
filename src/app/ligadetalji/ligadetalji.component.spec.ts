import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigadetaljiComponent } from './ligadetalji.component';

describe('LigadetaljiComponent', () => {
  let component: LigadetaljiComponent;
  let fixture: ComponentFixture<LigadetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigadetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigadetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
