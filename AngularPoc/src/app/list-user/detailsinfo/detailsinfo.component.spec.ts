import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsinfoComponent } from './detailsinfo.component';

describe('DetailsinfoComponent', () => {
  let component: DetailsinfoComponent;
  let fixture: ComponentFixture<DetailsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
