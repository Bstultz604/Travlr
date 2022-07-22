import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHighlightComponent } from './news-highlight.component';

describe('NewsHighlightComponent', () => {
  let component: NewsHighlightComponent;
  let fixture: ComponentFixture<NewsHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
