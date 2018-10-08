import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachgheNgoiComponent } from './danh-sachghe-ngoi.component';

describe('DanhSachgheNgoiComponent', () => {
  let component: DanhSachgheNgoiComponent;
  let fixture: ComponentFixture<DanhSachgheNgoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachgheNgoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachgheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
