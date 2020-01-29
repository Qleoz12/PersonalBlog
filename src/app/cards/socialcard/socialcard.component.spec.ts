import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialcardComponent } from './socialcard.component';

describe('SocialcardComponent', () => {
  let component: SocialcardComponent;
  let fixture: ComponentFixture<SocialcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
