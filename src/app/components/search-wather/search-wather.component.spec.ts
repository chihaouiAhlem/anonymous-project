import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWatherComponent } from './search-wather.component';

describe('SearchWatherComponent', () => {
  let component: SearchWatherComponent;
  let fixture: ComponentFixture<SearchWatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
