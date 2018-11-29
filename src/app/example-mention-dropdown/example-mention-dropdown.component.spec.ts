import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMentionDropdownComponent } from './example-mention-dropdown.component';

describe('FateMentionDropdownComponent', () => {
  let component: ExampleMentionDropdownComponent;
  let fixture: ComponentFixture<ExampleMentionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMentionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMentionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
