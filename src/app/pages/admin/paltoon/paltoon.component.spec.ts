import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaltoonComponent } from './paltoon.component';

describe('PaltoonComponent', () => {
  let component: PaltoonComponent;
  let fixture: ComponentFixture<PaltoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaltoonComponent]
    });
    fixture = TestBed.createComponent(PaltoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
