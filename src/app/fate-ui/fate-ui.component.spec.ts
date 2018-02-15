import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateUiComponent } from './fate-ui.component';

describe('FateEditorUiComponent', () => {
  let component: FateUiComponent;
  let fixture: ComponentFixture<FateUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
