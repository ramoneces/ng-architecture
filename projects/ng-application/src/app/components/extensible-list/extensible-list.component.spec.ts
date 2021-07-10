import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensibleListComponent } from './extensible-list.component';

describe('ExtensibleListComponent', () => {
  let component: ExtensibleListComponent;
  let fixture: ComponentFixture<ExtensibleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensibleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensibleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
