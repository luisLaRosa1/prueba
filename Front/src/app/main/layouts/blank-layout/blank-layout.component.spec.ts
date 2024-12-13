import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ApiModule } from 'src/core/shared/common/services/api/api.module';
import { LocalStorageService } from 'src/core/shared/common/services/storage';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';

import { BlankLayoutComponent } from './blank-layout.component';

describe('BlankLayoutComponent', () => {
  let component: BlankLayoutComponent;
  let fixture: ComponentFixture<BlankLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlankLayoutComponent],
      imports: [CommonModule, RouterModule.forRoot([]), ApiModule, HeaderModule, FooterModule, OAuthModule.forRoot()],
      providers: [LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
