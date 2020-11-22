import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmComponent } from './cm.component';

describe('CmComponent', () => {
  let component: CmComponent;
  let fixture: ComponentFixture<CmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
