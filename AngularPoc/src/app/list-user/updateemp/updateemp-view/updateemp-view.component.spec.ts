import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateempViewComponent } from './updateemp-view.component';

describe('UpdateempViewComponent', () => {
  let component: UpdateempViewComponent;
  let fixture: ComponentFixture<UpdateempViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateempViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateempViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
