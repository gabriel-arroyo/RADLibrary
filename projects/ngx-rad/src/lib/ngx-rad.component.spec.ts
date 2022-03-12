import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRADComponent } from './ngx-rad.component';

describe('NgxRADComponent', () => {
  let component: NgxRADComponent;
  let fixture: ComponentFixture<NgxRADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRADComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
