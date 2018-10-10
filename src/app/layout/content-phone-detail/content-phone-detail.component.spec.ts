import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPhoneDetailComponent } from './content-phone-detail.component';

describe('ContentPhoneDetailComponent', () => {
  let component: ContentPhoneDetailComponent;
  let fixture: ComponentFixture<ContentPhoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPhoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPhoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
