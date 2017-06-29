import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesChannelComponent } from './series-channel.component';

describe('SeriesChannelComponent', () => {
  let component: SeriesChannelComponent;
  let fixture: ComponentFixture<SeriesChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
