import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadahomeComponent } from './kannadahome.component';

describe('KannadahomeComponent', () => {
  let component: KannadahomeComponent;
  let fixture: ComponentFixture<KannadahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KannadahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KannadahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
