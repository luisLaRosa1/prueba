import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BoxRadioComponent } from './box-radio.component';

describe('BoxRadioComponent', () => {
  let component: BoxRadioComponent;
  let fixture: ComponentFixture<BoxRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxRadioComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
