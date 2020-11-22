import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanpaperComponent } from './urbanpaper.component';

describe('UrbanpaperComponent', () => {
  let component: UrbanpaperComponent;
  let fixture: ComponentFixture<UrbanpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
