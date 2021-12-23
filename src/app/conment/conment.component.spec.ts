import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConmentComponent } from './conment.component';

describe('ConmentComponent', () => {
  let component: ConmentComponent;
  let fixture: ComponentFixture<ConmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
