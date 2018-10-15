import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveformComponent } from './dynamic-reactiveform.component';

describe('DynamicReactiveformComponent', () => {
  let component: DynamicReactiveformComponent;
  let fixture: ComponentFixture<DynamicReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
