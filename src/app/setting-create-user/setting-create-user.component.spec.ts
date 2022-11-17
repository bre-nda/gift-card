import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCreateUserComponent } from './setting-create-user.component';

describe('SettingCreateUserComponent', () => {
  let component: SettingCreateUserComponent;
  let fixture: ComponentFixture<SettingCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
