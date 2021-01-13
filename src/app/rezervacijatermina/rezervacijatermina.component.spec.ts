import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaterminaComponent } from './rezervacijatermina.component';

describe('RezervacijaterminaComponent', () => {
  let component: RezervacijaterminaComponent;
  let fixture: ComponentFixture<RezervacijaterminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervacijaterminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaterminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
