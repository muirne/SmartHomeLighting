import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeviceComponent } from './device.component';

describe('AppDeviceComponent', () => {
  let component: AppDeviceComponent;
  let fixture: ComponentFixture<AppDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
