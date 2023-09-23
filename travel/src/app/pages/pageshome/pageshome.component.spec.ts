import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageshomeComponent } from './pageshome.component';

describe('PageshomeComponent', () => {
  let component: PageshomeComponent;
  let fixture: ComponentFixture<PageshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageshomeComponent]
    });
    fixture = TestBed.createComponent(PageshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
