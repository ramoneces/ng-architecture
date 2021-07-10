import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensibleContentComponent } from './extensible-content.component';

describe('ExtensibleContentComponent', () => {
  let component: ExtensibleContentComponent;
  let fixture: ComponentFixture<ExtensibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensibleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
