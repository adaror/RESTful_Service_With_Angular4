import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesByNameComponent } from './series-by-name.component';

describe('SeriesByNameComponent', () => {
  let component: SeriesByNameComponent;
  let fixture: ComponentFixture<SeriesByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
