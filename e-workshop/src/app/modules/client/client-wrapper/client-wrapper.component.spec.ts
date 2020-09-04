import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWrapperComponent } from './client-wrapper.component';

describe('ClientWrapperComponent', () => {
  let component: ClientWrapperComponent;
  let fixture: ComponentFixture<ClientWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
