import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewClientsComponent } from './user-view-clients.component';

describe('UserViewClientsComponent', () => {
  let component: UserViewClientsComponent;
  let fixture: ComponentFixture<UserViewClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
