import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateEditorComponent } from './fate-editor.component';

describe('FateEditorComponent', () => {
  let component: FateEditorComponent;
  let fixture: ComponentFixture<FateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
