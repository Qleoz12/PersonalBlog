import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramecardComponent } from './framecard.component';

describe('FramecardComponent', () => {
  let component: FramecardComponent;
  let fixture: ComponentFixture<FramecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
