import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadacourseComponent } from './kannadacourse.component';

describe('KannadacourseComponent', () => {
  let component: KannadacourseComponent;
  let fixture: ComponentFixture<KannadacourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KannadacourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KannadacourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
