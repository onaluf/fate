import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateEditorUiComponent } from './fate-editor-ui.component';

describe('FateEditorUiComponent', () => {
  let component: FateEditorUiComponent;
  let fixture: ComponentFixture<FateEditorUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateEditorUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateEditorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
