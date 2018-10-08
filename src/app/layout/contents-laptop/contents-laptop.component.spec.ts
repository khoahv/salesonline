import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsLaptopComponent } from './contents-laptop.component';

describe('ContentsLaptopComponent', () => {
  let component: ContentsLaptopComponent;
  let fixture: ComponentFixture<ContentsLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
