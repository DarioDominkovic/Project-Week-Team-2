import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDetailsComponent } from './alumni-details.component';

describe('AlumniDetailsComponent', () => {
  let component: AlumniDetailsComponent;
  let fixture: ComponentFixture<AlumniDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniDetailsComponent]
    });
    fixture = TestBed.createComponent(AlumniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
