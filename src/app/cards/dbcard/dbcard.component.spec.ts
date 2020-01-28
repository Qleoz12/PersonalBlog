import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBcardComponent } from './dbcard.component';

describe('DBcardComponent', () => {
  let component: DBcardComponent;
  let fixture: ComponentFixture<DBcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
