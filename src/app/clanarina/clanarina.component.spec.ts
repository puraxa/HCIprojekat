import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanarinaComponent } from './clanarina.component';

describe('ClanarinaComponent', () => {
  let component: ClanarinaComponent;
  let fixture: ComponentFixture<ClanarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanarinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
