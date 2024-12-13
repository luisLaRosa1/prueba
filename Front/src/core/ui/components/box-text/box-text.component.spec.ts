import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BoxTextComponent } from './box-text.component';

describe('BoxTextComponent', () => {
  let component: BoxTextComponent;
  let fixture: ComponentFixture<BoxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxTextComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
