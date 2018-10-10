import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLaptopDetailComponent } from './content-laptop-detail.component';

describe('ContentLaptopDetailComponent', () => {
  let component: ContentLaptopDetailComponent;
  let fixture: ComponentFixture<ContentLaptopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLaptopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLaptopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
