import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateBootstrapComponent } from './fate-bootstrap.component';

describe('FateBootstrapComponent', () => {
  let component: FateBootstrapComponent;
  let fixture: ComponentFixture<FateBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
