import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniListComponent } from './alumni-list.component';

describe('AlumniListComponent', () => {
  let component: AlumniListComponent;
  let fixture: ComponentFixture<AlumniListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniListComponent]
    });
    fixture = TestBed.createComponent(AlumniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
