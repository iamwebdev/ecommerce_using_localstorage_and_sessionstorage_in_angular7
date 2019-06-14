import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDealsComponent } from './trending-deals.component';

describe('TrendingDealsComponent', () => {
  let component: TrendingDealsComponent;
  let fixture: ComponentFixture<TrendingDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
