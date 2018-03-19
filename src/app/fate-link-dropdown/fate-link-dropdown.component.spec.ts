import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateLinkDorpdownComponent } from './fate-link-dorpdown.component';

describe('FateLinkDorpdownComponent', () => {
  let component: FateLinkDorpdownComponent;
  let fixture: ComponentFixture<FateLinkDorpdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateLinkDorpdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateLinkDorpdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
