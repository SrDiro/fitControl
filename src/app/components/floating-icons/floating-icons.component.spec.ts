import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingIconsComponent } from './floating-icons.component';

describe('FloatingIconsComponent', () => {
  let component: FloatingIconsComponent;
  let fixture: ComponentFixture<FloatingIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
