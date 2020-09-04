import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarModalComponent } from './new-car-modal.component';

describe('NewCarModalComponent', () => {
  let component: NewCarModalComponent;
  let fixture: ComponentFixture<NewCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
