import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonContentComponent } from './non-content.component';

describe('NonContentComponent', () => {
  let component: NonContentComponent;
  let fixture: ComponentFixture<NonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
