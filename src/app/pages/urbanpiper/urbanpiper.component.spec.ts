import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanpiperComponent } from './urbanpiper.component';

describe('UrbanpaperComponent', () => {
  let component: UrbanpiperComponent;
  let fixture: ComponentFixture<UrbanpiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanpiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanpiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
