import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArttistListContainerComponent } from './arttist-list-container.component';

describe('ArttistListContainerComponent', () => {
  let component: ArttistListContainerComponent;
  let fixture: ComponentFixture<ArttistListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArttistListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArttistListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
